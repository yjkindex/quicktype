import type { Readable } from "readable-stream";

import type { JSONSchemaSourceData, JSONSourceData } from "../packages/quicktype-core/src/index";
import type { GraphQLSourceData } from "../packages/quicktype-graphql-input/src/index";

export interface JSONTypeSource extends JSONSourceData<Readable> {
    kind: "json";
}

export interface SchemaTypeSource extends JSONSchemaSourceData {
    kind: "schema";
}

export interface GraphQLTypeSource extends GraphQLSourceData {
    kind: "graphql";
}

export type TypeSource = GraphQLTypeSource | JSONTypeSource | SchemaTypeSource;
