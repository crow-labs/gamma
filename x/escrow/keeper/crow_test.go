package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/testutil/nullify"
	"github.com/crow-labs/gamma/x/escrow/keeper"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Crow {
	items := make([]types.Crow, n)
	for i := range items {
		items[i].ListingId = strconv.Itoa(i)
		items[i].OrderId = strconv.Itoa(i)

		keeper.SetCrow(ctx, items[i])
	}
	return items
}

func TestCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCrow(ctx,
			item.ListingId,
			item.OrderId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCrow(ctx,
			item.ListingId,
			item.OrderId,
		)
		_, found := keeper.GetCrow(ctx,
			item.ListingId,
			item.OrderId,
		)
		require.False(t, found)
	}
}

func TestCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCrow(ctx)),
	)
}
