package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/whitelist/keeper"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBuyerIds(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BuyerIds {
	items := make([]types.BuyerIds, n)
	for i := range items {
		items[i].AccAddr = strconv.Itoa(i)

		keeper.SetBuyerIds(ctx, items[i])
	}
	return items
}

func TestBuyerIdsGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyerIds(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyerIds(ctx,
			item.AccAddr,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyerIdsRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyerIds(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyerIds(ctx,
			item.AccAddr,
		)
		_, found := keeper.GetBuyerIds(ctx,
			item.AccAddr,
		)
		require.False(t, found)
	}
}

func TestBuyerIdsGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyerIds(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyerIds(ctx)),
	)
}
