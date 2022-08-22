package cli

import (
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdCreateBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-buyers [buyer-id] [buyer]",
		Short: "Create a new buyers",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerId := args[0]

			// Get value arguments
			argBuyer := new(types.Buyer)
			err = json.Unmarshal([]byte(args[1]), argBuyer)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBuyers(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
				argBuyer,
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

func CmdUpdateBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-buyers [buyer-id] [buyer]",
		Short: "Update a buyers",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerId := args[0]

			// Get value arguments
			argBuyer := new(types.Buyer)
			err = json.Unmarshal([]byte(args[1]), argBuyer)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBuyers(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
				argBuyer,
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

func CmdDeleteBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-buyers [buyer-id]",
		Short: "Delete a buyers",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexBuyerId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBuyers(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
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
