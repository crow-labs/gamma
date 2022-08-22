package keeper_test

import (
	"testing"

	testkeeper "github.com/crow-labs/gamma/testutil/keeper"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WhitelistKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
