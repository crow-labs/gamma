package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/gamma/x/escrow/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) VoteAll(c context.Context, req *types.QueryAllVoteRequest) (*types.QueryAllVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var votes []types.Vote
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	voteStore := prefix.NewStore(store, types.KeyPrefix(types.VoteKeyPrefix))

	pageRes, err := query.Paginate(voteStore, req.Pagination, func(key []byte, value []byte) error {
		var vote types.Vote
		if err := k.cdc.Unmarshal(value, &vote); err != nil {
			return err
		}

		votes = append(votes, vote)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllVoteResponse{Vote: votes, Pagination: pageRes}, nil
}

func (k Keeper) Vote(c context.Context, req *types.QueryGetVoteRequest) (*types.QueryGetVoteResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetVote(
		ctx,
		req.VoterId,
		req.DisputeId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetVoteResponse{Vote: val}, nil
}
