package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BuyerIdsAll(c context.Context, req *types.QueryAllBuyerIdsRequest) (*types.QueryAllBuyerIdsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyerIdss []types.BuyerIds
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyerIdsStore := prefix.NewStore(store, types.KeyPrefix(types.BuyerIdsKeyPrefix))

	pageRes, err := query.Paginate(buyerIdsStore, req.Pagination, func(key []byte, value []byte) error {
		var buyerIds types.BuyerIds
		if err := k.cdc.Unmarshal(value, &buyerIds); err != nil {
			return err
		}

		buyerIdss = append(buyerIdss, buyerIds)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyerIdsResponse{BuyerIds: buyerIdss, Pagination: pageRes}, nil
}

func (k Keeper) BuyerIds(c context.Context, req *types.QueryGetBuyerIdsRequest) (*types.QueryGetBuyerIdsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyerIds(
		ctx,
		req.AccAddr,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyerIdsResponse{BuyerIds: val}, nil
}
