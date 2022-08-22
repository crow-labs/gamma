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

func createNVerdict(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Verdict {
	items := make([]types.Verdict, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)
		items[i].DisputeId = strconv.Itoa(i)

		keeper.SetVerdict(ctx, items[i])
	}
	return items
}

func TestVerdictGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVerdict(ctx,
			item.CrowId,
			item.DisputeId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVerdictRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVerdict(ctx,
			item.CrowId,
			item.DisputeId,
		)
		_, found := keeper.GetVerdict(ctx,
			item.CrowId,
			item.DisputeId,
		)
		require.False(t, found)
	}
}

func TestVerdictGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVerdict(ctx)),
	)
}
