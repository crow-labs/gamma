package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdCreateDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-dispute [crow-id] [dispute-id] [title] [description] [evidence]",
		Short: "Create a new dispute",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]

			// Get value arguments
			argDisputeId := args[1]
			argTitle := args[2]
			argDescription := args[3]
			argEvidence := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDispute(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				argDisputeId,
				argTitle,
				argDescription,
				argEvidence,
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

func CmdUpdateDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-dispute [crow-id] [dispute-id] [title] [description] [evidence]",
		Short: "Update a dispute",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]

			// Get value arguments
			argDisputeId := args[1]
			argTitle := args[2]
			argDescription := args[3]
			argEvidence := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDispute(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				argDisputeId,
				argTitle,
				argDescription,
				argEvidence,
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

func CmdDeleteDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-dispute [crow-id]",
		Short: "Delete a dispute",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCrowId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteDispute(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
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
