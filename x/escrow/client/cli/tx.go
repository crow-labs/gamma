package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/gamma/x/escrow/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateCrow())
	cmd.AddCommand(CmdUpdateCrow())
	cmd.AddCommand(CmdDeleteCrow())
	cmd.AddCommand(CmdCreateVote())
	cmd.AddCommand(CmdUpdateVote())
	cmd.AddCommand(CmdDeleteVote())
	cmd.AddCommand(CmdCreateDispute())
	cmd.AddCommand(CmdUpdateDispute())
	cmd.AddCommand(CmdDeleteDispute())
	cmd.AddCommand(CmdCreateVerdict())
	cmd.AddCommand(CmdUpdateVerdict())
	cmd.AddCommand(CmdDeleteVerdict())
	// this line is used by starport scaffolding # 1

	return cmd
}
