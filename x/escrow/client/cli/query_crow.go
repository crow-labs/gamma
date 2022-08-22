package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-crow",
		Short: "list all crow",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCrowRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CrowAll(context.Background(), params)
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

func CmdShowCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-crow [listing-id] [order-id]",
		Short: "shows a crow",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argListingId := args[0]
			argOrderId := args[1]

			params := &types.QueryGetCrowRequest{
				ListingId: argListingId,
				OrderId:   argOrderId,
			}

			res, err := queryClient.Crow(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
