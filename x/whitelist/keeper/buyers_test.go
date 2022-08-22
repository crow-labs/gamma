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

func createNBuyers(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Buyers {
	items := make([]types.Buyers, n)
	for i := range items {
		items[i].BuyerId = strconv.Itoa(i)

		keeper.SetBuyers(ctx, items[i])
	}
	return items
}

func TestBuyersGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyers(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyers(ctx,
			item.BuyerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyersRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyers(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyers(ctx,
			item.BuyerId,
		)
		_, found := keeper.GetBuyers(ctx,
			item.BuyerId,
		)
		require.False(t, found)
	}
}

func TestBuyersGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyers(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyers(ctx)),
	)
}
