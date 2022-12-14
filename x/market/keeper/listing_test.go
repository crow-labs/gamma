package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/market/keeper"
	"github.com/crow-labs/gamma/x/market/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNListing(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Listing {
	items := make([]types.Listing, n)
	for i := range items {
		items[i].ProdId = strconv.Itoa(i)
		items[i].ListingId = strconv.Itoa(i)

		keeper.SetListing(ctx, items[i])
	}
	return items
}

func TestListingGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNListing(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetListing(ctx,
			item.ProdId,
			item.ListingId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestListingRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNListing(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveListing(ctx,
			item.ProdId,
			item.ListingId,
		)
		_, found := keeper.GetListing(ctx,
			item.ProdId,
			item.ListingId,
		)
		require.False(t, found)
	}
}

func TestListingGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNListing(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllListing(ctx)),
	)
}
