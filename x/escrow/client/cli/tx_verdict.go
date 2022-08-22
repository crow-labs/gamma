package cli

import (
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-verdict [crow-id] [dispute-id] [vote-ids] [resulting-vote]",
		Short: "Create a new verdict",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]
			indexDisputeId := args[1]

			// Get value arguments
			argVoteIds := strings.Split(args[2], listSeparator)
			argResultingVote := new(types.Vote)
			err = json.Unmarshal([]byte(args[3]), argResultingVote)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVerdict(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				indexDisputeId,
				argVoteIds,
				argResultingVote,
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

func CmdUpdateVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-verdict [crow-id] [dispute-id] [vote-ids] [resulting-vote]",
		Short: "Update a verdict",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]
			indexDisputeId := args[1]

			// Get value arguments
			argVoteIds := strings.Split(args[2], listSeparator)
			argResultingVote := new(types.Vote)
			err = json.Unmarshal([]byte(args[3]), argResultingVote)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVerdict(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				indexDisputeId,
				argVoteIds,
				argResultingVote,
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

func CmdDeleteVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-verdict [crow-id] [dispute-id]",
		Short: "Delete a verdict",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCrowId := args[0]
			indexDisputeId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVerdict(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				indexDisputeId,
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
