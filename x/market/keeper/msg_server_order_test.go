package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/x/market/keeper"
	"github.com/crow-labs/gamma/x/market/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestOrderMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MarketKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateOrder{Creator: creator,
			OrderId: strconv.Itoa(i),
			BuyerId: strconv.Itoa(i),
		}
		_, err := srv.CreateOrder(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetOrder(ctx,
			expected.OrderId,
			expected.BuyerId,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestOrderMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateOrder{Creator: creator,
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateOrder{Creator: "B",
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateOrder{Creator: creator,
				OrderId: strconv.Itoa(100000),
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateOrder{Creator: creator,
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			}
			_, err := srv.CreateOrder(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetOrder(ctx,
					expected.OrderId,
					expected.BuyerId,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestOrderMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteOrder{Creator: creator,
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteOrder{Creator: "B",
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteOrder{Creator: creator,
				OrderId: strconv.Itoa(100000),
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateOrder(wctx, &types.MsgCreateOrder{Creator: creator,
				OrderId: strconv.Itoa(0),
				BuyerId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetOrder(ctx,
					tc.request.OrderId,
					tc.request.BuyerId,
				)
				require.False(t, found)
			}
		})
	}
}
