package keeper

import (
	"github.com/crow-labs/gamma/x/whitelist/types"
)

var _ types.QueryServer = Keeper{}
