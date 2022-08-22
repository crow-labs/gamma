package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-voter",
		Short: "list all voter",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllVoterRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.VoterAll(context.Background(), params)
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

func CmdShowVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-voter [acc-addr]",
		Short: "shows a voter",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argAccAddr := args[0]

			params := &types.QueryGetVoterRequest{
				AccAddr: argAccAddr,
			}

			res, err := queryClient.Voter(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
