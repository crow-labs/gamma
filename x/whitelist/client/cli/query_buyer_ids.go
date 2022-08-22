package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListBuyerIds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-buyer-ids",
		Short: "list all buyerIds",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBuyerIdsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BuyerIdsAll(context.Background(), params)
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

func CmdShowBuyerIds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-buyer-ids [acc-addr]",
		Short: "shows a buyerIds",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argAccAddr := args[0]

			params := &types.QueryGetBuyerIdsRequest{
				AccAddr: argAccAddr,
			}

			res, err := queryClient.BuyerIds(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
