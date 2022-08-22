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

func TestBuyerIdsMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBuyerIds{Creator: creator,
			AccAddr: strconv.Itoa(i),
		}
		_, err := srv.CreateBuyerIds(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBuyerIds(ctx,
			expected.AccAddr,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestBuyerIdsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBuyerIds
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBuyerIds{Creator: "B",
				AccAddr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(0),
			}
			_, err := srv.CreateBuyerIds(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBuyerIds(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBuyerIds(ctx,
					expected.AccAddr,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestBuyerIdsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBuyerIds
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBuyerIds{Creator: "B",
				AccAddr: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBuyerIds(wctx, &types.MsgCreateBuyerIds{Creator: creator,
				AccAddr: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBuyerIds(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBuyerIds(ctx,
					tc.request.AccAddr,
				)
				require.False(t, found)
			}
		})
	}
}
