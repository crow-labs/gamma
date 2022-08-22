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

func createNDispute(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Dispute {
	items := make([]types.Dispute, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)

		keeper.SetDispute(ctx, items[i])
	}
	return items
}

func TestDisputeGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDispute(ctx,
			item.CrowId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestDisputeRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDispute(ctx,
			item.CrowId,
		)
		_, found := keeper.GetDispute(ctx,
			item.CrowId,
		)
		require.False(t, found)
	}
}

func TestDisputeGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNDispute(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDispute(ctx)),
	)
}
