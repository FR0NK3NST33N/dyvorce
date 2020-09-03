import * as yargs from "yargs";
import { GenerateMigrationCommand } from "./generate/GenerateMigrationCommand"

export class GenerateCommand implements yargs.CommandModule {
    command = "generate <command>";
    aliases = "g";

    builder(args: yargs.Argv) {
        return yargs.command(new GenerateMigrationCommand())
    }

    async handler(args: yargs.Arguments) {

    }
}