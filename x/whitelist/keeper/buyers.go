package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// SetBuyers set a specific buyers in the store from its index
func (k Keeper) SetBuyers(ctx sdk.Context, buyers types.Buyers) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyersKeyPrefix))
	b := k.cdc.MustMarshal(&buyers)
	store.Set(types.BuyersKey(
		buyers.BuyerId,
	), b)
}

// GetBuyers returns a buyers from its index
func (k Keeper) GetBuyers(
	ctx sdk.Context,
	buyerId string,

) (val types.Buyers, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyersKeyPrefix))

	b := store.Get(types.BuyersKey(
		buyerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyers removes a buyers from the store
func (k Keeper) RemoveBuyers(
	ctx sdk.Context,
	buyerId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyersKeyPrefix))
	store.Delete(types.BuyersKey(
		buyerId,
	))
}

// GetAllBuyers returns all buyers
func (k Keeper) GetAllBuyers(ctx sdk.Context) (list []types.Buyers) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyersKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Buyers
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
