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

func (k Keeper) BuyersAll(c context.Context, req *types.QueryAllBuyersRequest) (*types.QueryAllBuyersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyerss []types.Buyers
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyersStore := prefix.NewStore(store, types.KeyPrefix(types.BuyersKeyPrefix))

	pageRes, err := query.Paginate(buyersStore, req.Pagination, func(key []byte, value []byte) error {
		var buyers types.Buyers
		if err := k.cdc.Unmarshal(value, &buyers); err != nil {
			return err
		}

		buyerss = append(buyerss, buyers)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyersResponse{Buyers: buyerss, Pagination: pageRes}, nil
}

func (k Keeper) Buyers(c context.Context, req *types.QueryGetBuyersRequest) (*types.QueryGetBuyersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyers(
		ctx,
		req.BuyerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyersResponse{Buyers: val}, nil
}
