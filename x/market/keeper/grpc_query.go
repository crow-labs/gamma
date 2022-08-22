package keeper

import (
	"github.com/crow-labs/gamma/x/market/types"
)

var _ types.QueryServer = Keeper{}
