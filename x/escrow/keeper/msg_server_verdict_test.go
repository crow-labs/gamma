package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/x/escrow/keeper"
	"github.com/crow-labs/gamma/x/escrow/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVerdictMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateVerdict{Creator: creator,
			CrowId:    strconv.Itoa(i),
			DisputeId: strconv.Itoa(i),
		}
		_, err := srv.CreateVerdict(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetVerdict(ctx,
			expected.CrowId,
			expected.DisputeId,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestVerdictMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateVerdict
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateVerdict{Creator: creator,
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateVerdict{Creator: "B",
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateVerdict{Creator: creator,
				CrowId:    strconv.Itoa(100000),
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateVerdict{Creator: creator,
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			}
			_, err := srv.CreateVerdict(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateVerdict(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetVerdict(ctx,
					expected.CrowId,
					expected.DisputeId,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestVerdictMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteVerdict
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteVerdict{Creator: creator,
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteVerdict{Creator: "B",
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteVerdict{Creator: creator,
				CrowId:    strconv.Itoa(100000),
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateVerdict(wctx, &types.MsgCreateVerdict{Creator: creator,
				CrowId:    strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteVerdict(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetVerdict(ctx,
					tc.request.CrowId,
					tc.request.DisputeId,
				)
				require.False(t, found)
			}
		})
	}
}
