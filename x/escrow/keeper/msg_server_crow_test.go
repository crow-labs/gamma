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

func TestCrowMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateCrow{Creator: creator,
			ListingId: strconv.Itoa(i),
			OrderId:   strconv.Itoa(i),
		}
		_, err := srv.CreateCrow(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCrow(ctx,
			expected.ListingId,
			expected.OrderId,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCrowMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCrow{Creator: creator,
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCrow{Creator: "B",
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCrow{Creator: creator,
				ListingId: strconv.Itoa(100000),
				OrderId:   strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCrow{Creator: creator,
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			}
			_, err := srv.CreateCrow(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCrow(ctx,
					expected.ListingId,
					expected.OrderId,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCrowMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCrow{Creator: creator,
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCrow{Creator: "B",
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCrow{Creator: creator,
				ListingId: strconv.Itoa(100000),
				OrderId:   strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCrow(wctx, &types.MsgCreateCrow{Creator: creator,
				ListingId: strconv.Itoa(0),
				OrderId:   strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCrow(ctx,
					tc.request.ListingId,
					tc.request.OrderId,
				)
				require.False(t, found)
			}
		})
	}
}
