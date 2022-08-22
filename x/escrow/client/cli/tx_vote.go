package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/gamma/x/escrow/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-vote [voter-id] [dispute-id] [vote-id] [buyer-guilty] [seller-guilty] [refund-to-buyer] [send-to-seller] [buyer-punishment] [seller-punishment]",
		Short: "Create a new vote",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoterId := args[0]
			indexDisputeId := args[1]

			// Get value arguments
			argVoteId := args[2]
			argBuyerGuilty, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argSellerGuilty, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}
			argRefundToBuyer, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}
			argSendToSeller, err := sdk.ParseCoinsNormalized(args[6])
			if err != nil {
				return err
			}
			argBuyerPunishment := args[7]
			argSellerPunishment := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVote(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
				indexDisputeId,
				argVoteId,
				argBuyerGuilty,
				argSellerGuilty,
				argRefundToBuyer,
				argSendToSeller,
				argBuyerPunishment,
				argSellerPunishment,
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

func CmdUpdateVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-vote [voter-id] [dispute-id] [vote-id] [buyer-guilty] [seller-guilty] [refund-to-buyer] [send-to-seller] [buyer-punishment] [seller-punishment]",
		Short: "Update a vote",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoterId := args[0]
			indexDisputeId := args[1]

			// Get value arguments
			argVoteId := args[2]
			argBuyerGuilty, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argSellerGuilty, err := cast.ToBoolE(args[4])
			if err != nil {
				return err
			}
			argRefundToBuyer, err := sdk.ParseCoinsNormalized(args[5])
			if err != nil {
				return err
			}
			argSendToSeller, err := sdk.ParseCoinsNormalized(args[6])
			if err != nil {
				return err
			}
			argBuyerPunishment := args[7]
			argSellerPunishment := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVote(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
				indexDisputeId,
				argVoteId,
				argBuyerGuilty,
				argSellerGuilty,
				argRefundToBuyer,
				argSendToSeller,
				argBuyerPunishment,
				argSellerPunishment,
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

func CmdDeleteVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-vote [voter-id] [dispute-id]",
		Short: "Delete a vote",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexVoterId := args[0]
			indexDisputeId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVote(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
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
