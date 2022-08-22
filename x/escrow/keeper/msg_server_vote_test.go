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

func TestVoteMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateVote{Creator: creator,
			VoterId:   strconv.Itoa(i),
			DisputeId: strconv.Itoa(i),
		}
		_, err := srv.CreateVote(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetVote(ctx,
			expected.VoterId,
			expected.DisputeId,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestVoteMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateVote
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateVote{Creator: creator,
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateVote{Creator: "B",
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateVote{Creator: creator,
				VoterId:   strconv.Itoa(100000),
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateVote{Creator: creator,
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			}
			_, err := srv.CreateVote(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateVote(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetVote(ctx,
					expected.VoterId,
					expected.DisputeId,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestVoteMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteVote
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteVote{Creator: creator,
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteVote{Creator: "B",
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteVote{Creator: creator,
				VoterId:   strconv.Itoa(100000),
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateVote(wctx, &types.MsgCreateVote{Creator: creator,
				VoterId:   strconv.Itoa(0),
				DisputeId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteVote(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetVote(ctx,
					tc.request.VoterId,
					tc.request.DisputeId,
				)
				require.False(t, found)
			}
		})
	}
}
