package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdCreateBuyerIds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-buyer-ids [acc-addr] [buyer-id]",
		Short: "Create a new buyerIds",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAccAddr := args[0]

			// Get value arguments
			argBuyerId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBuyerIds(
				clientCtx.GetFromAddress().String(),
				indexAccAddr,
				argBuyerId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateBuyerIds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-buyer-ids [acc-addr] [buyer-id]",
		Short: "Update a buyerIds",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAccAddr := args[0]

			// Get value arguments
			argBuyerId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBuyerIds(
				clientCtx.GetFromAddress().String(),
				indexAccAddr,
				argBuyerId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteBuyerIds() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-buyer-ids [acc-addr]",
		Short: "Delete a buyerIds",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexAccAddr := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBuyerIds(
				clientCtx.GetFromAddress().String(),
				indexAccAddr,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
