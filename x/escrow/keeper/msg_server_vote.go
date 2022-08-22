package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/gamma/x/escrow/types"
)

func (k msgServer) CreateVote(goCtx context.Context, msg *types.MsgCreateVote) (*types.MsgCreateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetVote(
		ctx,
		msg.VoterId,
		msg.DisputeId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var vote = types.Vote{
		Creator:          msg.Creator,
		VoterId:          msg.VoterId,
		DisputeId:        msg.DisputeId,
		VoteId:           msg.VoteId,
		BuyerGuilty:      msg.BuyerGuilty,
		SellerGuilty:     msg.SellerGuilty,
		RefundToBuyer:    msg.RefundToBuyer,
		SendToSeller:     msg.SendToSeller,
		BuyerPunishment:  msg.BuyerPunishment,
		SellerPunishment: msg.SellerPunishment,
	}

	k.SetVote(
		ctx,
		vote,
	)
	return &types.MsgCreateVoteResponse{}, nil
}

func (k msgServer) UpdateVote(goCtx context.Context, msg *types.MsgUpdateVote) (*types.MsgUpdateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVote(
		ctx,
		msg.VoterId,
		msg.DisputeId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var vote = types.Vote{
		Creator:          msg.Creator,
		VoterId:          msg.VoterId,
		DisputeId:        msg.DisputeId,
		VoteId:           msg.VoteId,
		BuyerGuilty:      msg.BuyerGuilty,
		SellerGuilty:     msg.SellerGuilty,
		RefundToBuyer:    msg.RefundToBuyer,
		SendToSeller:     msg.SendToSeller,
		BuyerPunishment:  msg.BuyerPunishment,
		SellerPunishment: msg.SellerPunishment,
	}

	k.SetVote(ctx, vote)

	return &types.MsgUpdateVoteResponse{}, nil
}

func (k msgServer) DeleteVote(goCtx context.Context, msg *types.MsgDeleteVote) (*types.MsgDeleteVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVote(
		ctx,
		msg.VoterId,
		msg.DisputeId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveVote(
		ctx,
		msg.VoterId,
		msg.DisputeId,
	)

	return &types.MsgDeleteVoteResponse{}, nil
}
