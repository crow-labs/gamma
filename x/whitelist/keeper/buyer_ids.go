package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// SetBuyerIds set a specific buyerIds in the store from its index
func (k Keeper) SetBuyerIds(ctx sdk.Context, buyerIds types.BuyerIds) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerIdsKeyPrefix))
	b := k.cdc.MustMarshal(&buyerIds)
	store.Set(types.BuyerIdsKey(
		buyerIds.AccAddr,
	), b)
}

// GetBuyerIds returns a buyerIds from its index
func (k Keeper) GetBuyerIds(
	ctx sdk.Context,
	accAddr string,

) (val types.BuyerIds, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerIdsKeyPrefix))

	b := store.Get(types.BuyerIdsKey(
		accAddr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyerIds removes a buyerIds from the store
func (k Keeper) RemoveBuyerIds(
	ctx sdk.Context,
	accAddr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerIdsKeyPrefix))
	store.Delete(types.BuyerIdsKey(
		accAddr,
	))
}

// GetAllBuyerIds returns all buyerIds
func (k Keeper) GetAllBuyerIds(ctx sdk.Context) (list []types.BuyerIds) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerIdsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BuyerIds
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
