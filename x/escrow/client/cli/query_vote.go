package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-vote",
		Short: "list all vote",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllVoteRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.VoteAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-vote [voter-id] [dispute-id]",
		Short: "shows a vote",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argVoterId := args[0]
			argDisputeId := args[1]

			params := &types.QueryGetVoteRequest{
				VoterId:   argVoterId,
				DisputeId: argDisputeId,
			}

			res, err := queryClient.Vote(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
