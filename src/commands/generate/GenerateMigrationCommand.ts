import * as yargs from "yargs";
import chalk from "chalk";

export class GenerateMigrationCommand implements yargs.CommandModule {
    command = "migration";
    describe = "Generates initial TypeORM project structure. " +
        "If name specified then creates files inside directory called as name. " +
        "If its not specified then creates files inside current directory.";

    builder(args: yargs.Argv) {
        return args
            .option("n", {
                alias: "name",
                describe: "name for migration"
            })
    }

    async handler(args: yargs.Arguments) {
        try {
            const migrationName: string = args.name as any || "NewMigration";
            console.log(chalk.green("creating migration: ", migrationName));
        } catch (err) {
            console.log(chalk.black.bgRed("Error during migration creation:"));
            console.error(err);
            process.exit(1);
        }
    }
}