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

func createNVoter(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Voter {
	items := make([]types.Voter, n)
	for i := range items {
		items[i].AccAddr = strconv.Itoa(i)

		keeper.SetVoter(ctx, items[i])
	}
	return items
}

func TestVoterGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVoter(ctx,
			item.AccAddr,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVoterRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVoter(ctx,
			item.AccAddr,
		)
		_, found := keeper.GetVoter(ctx,
			item.AccAddr,
		)
		require.False(t, found)
	}
}

func TestVoterGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNVoter(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVoter(ctx)),
	)
}
