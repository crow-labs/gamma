package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-buyers",
		Short: "list all buyers",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBuyersRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BuyersAll(context.Background(), params)
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

func CmdShowBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-buyers [buyer-id]",
		Short: "shows a buyers",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBuyerId := args[0]

			params := &types.QueryGetBuyersRequest{
				BuyerId: argBuyerId,
			}

			res, err := queryClient.Buyers(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
