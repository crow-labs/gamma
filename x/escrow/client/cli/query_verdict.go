package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-verdict",
		Short: "list all verdict",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllVerdictRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.VerdictAll(context.Background(), params)
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

func CmdShowVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-verdict [crow-id] [dispute-id]",
		Short: "shows a verdict",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCrowId := args[0]
			argDisputeId := args[1]

			params := &types.QueryGetVerdictRequest{
				CrowId:    argCrowId,
				DisputeId: argDisputeId,
			}

			res, err := queryClient.Verdict(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
