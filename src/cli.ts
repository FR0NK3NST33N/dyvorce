#!/usr/bin/env node
import * as yargs from "yargs";
import { GenerateCommand } from "./commands/GenerateCommand";

//commandDir

yargs
    .usage("Usage: $0 <command> [options]")
    .command(new GenerateCommand())
    .recommendCommands()
    .demandCommand(1)
    .strict()
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;

require("yargonaut")
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");