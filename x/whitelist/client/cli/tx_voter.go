package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/gamma/x/whitelist/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-voter [acc-addr] [status] [pending-votes] [previous-votes] [voter-id]",
		Short: "Create a new voter",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAccAddr := args[0]

			// Get value arguments
			argStatus := args[1]
			argPendingVotes := strings.Split(args[2], listSeparator)
			argPreviousVotes := strings.Split(args[3], listSeparator)
			argVoterId := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVoter(
				clientCtx.GetFromAddress().String(),
				indexAccAddr,
				argStatus,
				argPendingVotes,
				argPreviousVotes,
				argVoterId,
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

func CmdUpdateVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-voter [acc-addr] [status] [pending-votes] [previous-votes] [voter-id]",
		Short: "Update a voter",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexAccAddr := args[0]

			// Get value arguments
			argStatus := args[1]
			argPendingVotes := strings.Split(args[2], listSeparator)
			argPreviousVotes := strings.Split(args[3], listSeparator)
			argVoterId := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVoter(
				clientCtx.GetFromAddress().String(),
				indexAccAddr,
				argStatus,
				argPendingVotes,
				argPreviousVotes,
				argVoterId,
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

func CmdDeleteVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-voter [acc-addr]",
		Short: "Delete a voter",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexAccAddr := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVoter(
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
