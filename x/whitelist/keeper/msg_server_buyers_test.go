package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/x/whitelist/keeper"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestBuyersMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBuyers{Creator: creator,
			BuyerId: strconv.Itoa(i),
		}
		_, err := srv.CreateBuyers(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBuyers(ctx,
			expected.BuyerId,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestBuyersMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBuyers
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBuyers{Creator: creator,
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBuyers{Creator: "B",
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBuyers{Creator: creator,
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBuyers{Creator: creator,
				BuyerId: strconv.Itoa(0),
			}
			_, err := srv.CreateBuyers(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBuyers(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBuyers(ctx,
					expected.BuyerId,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestBuyersMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBuyers
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBuyers{Creator: creator,
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBuyers{Creator: "B",
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBuyers{Creator: creator,
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBuyers(wctx, &types.MsgCreateBuyers{Creator: creator,
				BuyerId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBuyers(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBuyers(ctx,
					tc.request.BuyerId,
				)
				require.False(t, found)
			}
		})
	}
}
