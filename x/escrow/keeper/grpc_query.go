package keeper

import (
	"github.com/crow-labs/gamma/x/escrow/types"
)

var _ types.QueryServer = Keeper{}
