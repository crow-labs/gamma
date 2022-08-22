package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/whitelist/types"
)

// SetVoter set a specific voter in the store from its index
func (k Keeper) SetVoter(ctx sdk.Context, voter types.Voter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	b := k.cdc.MustMarshal(&voter)
	store.Set(types.VoterKey(
		voter.AccAddr,
	), b)
}

// GetVoter returns a voter from its index
func (k Keeper) GetVoter(
	ctx sdk.Context,
	accAddr string,

) (val types.Voter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))

	b := store.Get(types.VoterKey(
		accAddr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVoter removes a voter from the store
func (k Keeper) RemoveVoter(
	ctx sdk.Context,
	accAddr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	store.Delete(types.VoterKey(
		accAddr,
	))
}

// GetAllVoter returns all voter
func (k Keeper) GetAllVoter(ctx sdk.Context) (list []types.Voter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Voter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
