
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model article_tag
 * 
 */
export type article_tag = $Result.DefaultSelection<Prisma.$article_tagPayload>
/**
 * Model articles
 * 
 */
export type articles = $Result.DefaultSelection<Prisma.$articlesPayload>
/**
 * Model cache
 * 
 */
export type cache = $Result.DefaultSelection<Prisma.$cachePayload>
/**
 * Model google_mitra_images
 * 
 */
export type google_mitra_images = $Result.DefaultSelection<Prisma.$google_mitra_imagesPayload>
/**
 * Model insta_api_credentials
 * 
 */
export type insta_api_credentials = $Result.DefaultSelection<Prisma.$insta_api_credentialsPayload>
/**
 * Model layanans
 * 
 */
export type layanans = $Result.DefaultSelection<Prisma.$layanansPayload>
/**
 * Model meta_descriptions
 * 
 */
export type meta_descriptions = $Result.DefaultSelection<Prisma.$meta_descriptionsPayload>
/**
 * Model mitra_menus
 * 
 */
export type mitra_menus = $Result.DefaultSelection<Prisma.$mitra_menusPayload>
/**
 * Model partners
 * 
 */
export type partners = $Result.DefaultSelection<Prisma.$partnersPayload>
/**
 * Model produks
 * 
 */
export type produks = $Result.DefaultSelection<Prisma.$produksPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model users_google
 * 
 */
export type users_google = $Result.DefaultSelection<Prisma.$users_googlePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Article_tags
 * const article_tags = await prisma.article_tag.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Article_tags
   * const article_tags = await prisma.article_tag.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.article_tag`: Exposes CRUD operations for the **article_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Article_tags
    * const article_tags = await prisma.article_tag.findMany()
    * ```
    */
  get article_tag(): Prisma.article_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cache`: Exposes CRUD operations for the **cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caches
    * const caches = await prisma.cache.findMany()
    * ```
    */
  get cache(): Prisma.cacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.google_mitra_images`: Exposes CRUD operations for the **google_mitra_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Google_mitra_images
    * const google_mitra_images = await prisma.google_mitra_images.findMany()
    * ```
    */
  get google_mitra_images(): Prisma.google_mitra_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insta_api_credentials`: Exposes CRUD operations for the **insta_api_credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insta_api_credentials
    * const insta_api_credentials = await prisma.insta_api_credentials.findMany()
    * ```
    */
  get insta_api_credentials(): Prisma.insta_api_credentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layanans`: Exposes CRUD operations for the **layanans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layanans
    * const layanans = await prisma.layanans.findMany()
    * ```
    */
  get layanans(): Prisma.layanansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta_descriptions`: Exposes CRUD operations for the **meta_descriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meta_descriptions
    * const meta_descriptions = await prisma.meta_descriptions.findMany()
    * ```
    */
  get meta_descriptions(): Prisma.meta_descriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mitra_menus`: Exposes CRUD operations for the **mitra_menus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mitra_menus
    * const mitra_menus = await prisma.mitra_menus.findMany()
    * ```
    */
  get mitra_menus(): Prisma.mitra_menusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partners`: Exposes CRUD operations for the **partners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partners.findMany()
    * ```
    */
  get partners(): Prisma.partnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produks`: Exposes CRUD operations for the **produks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produks.findMany()
    * ```
    */
  get produks(): Prisma.produksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_google`: Exposes CRUD operations for the **users_google** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_googles
    * const users_googles = await prisma.users_google.findMany()
    * ```
    */
  get users_google(): Prisma.users_googleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    article_tag: 'article_tag',
    articles: 'articles',
    cache: 'cache',
    google_mitra_images: 'google_mitra_images',
    insta_api_credentials: 'insta_api_credentials',
    layanans: 'layanans',
    meta_descriptions: 'meta_descriptions',
    mitra_menus: 'mitra_menus',
    partners: 'partners',
    produks: 'produks',
    sessions: 'sessions',
    tags: 'tags',
    users_google: 'users_google'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "article_tag" | "articles" | "cache" | "google_mitra_images" | "insta_api_credentials" | "layanans" | "meta_descriptions" | "mitra_menus" | "partners" | "produks" | "sessions" | "tags" | "users_google"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      article_tag: {
        payload: Prisma.$article_tagPayload<ExtArgs>
        fields: Prisma.article_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.article_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.article_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          findFirst: {
            args: Prisma.article_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.article_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          findMany: {
            args: Prisma.article_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>[]
          }
          create: {
            args: Prisma.article_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          createMany: {
            args: Prisma.article_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.article_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          update: {
            args: Prisma.article_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          deleteMany: {
            args: Prisma.article_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.article_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.article_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagPayload>
          }
          aggregate: {
            args: Prisma.Article_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle_tag>
          }
          groupBy: {
            args: Prisma.article_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Article_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.article_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Article_tagCountAggregateOutputType> | number
          }
        }
      }
      articles: {
        payload: Prisma.$articlesPayload<ExtArgs>
        fields: Prisma.articlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findFirst: {
            args: Prisma.articlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findMany: {
            args: Prisma.articlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          create: {
            args: Prisma.articlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          createMany: {
            args: Prisma.articlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          update: {
            args: Prisma.articlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          deleteMany: {
            args: Prisma.articlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.articlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      cache: {
        payload: Prisma.$cachePayload<ExtArgs>
        fields: Prisma.cacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findFirst: {
            args: Prisma.cacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          findMany: {
            args: Prisma.cacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>[]
          }
          create: {
            args: Prisma.cacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          createMany: {
            args: Prisma.cacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          update: {
            args: Prisma.cacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          deleteMany: {
            args: Prisma.cacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cachePayload>
          }
          aggregate: {
            args: Prisma.CacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCache>
          }
          groupBy: {
            args: Prisma.cacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<CacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.cacheCountArgs<ExtArgs>
            result: $Utils.Optional<CacheCountAggregateOutputType> | number
          }
        }
      }
      google_mitra_images: {
        payload: Prisma.$google_mitra_imagesPayload<ExtArgs>
        fields: Prisma.google_mitra_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.google_mitra_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.google_mitra_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          findFirst: {
            args: Prisma.google_mitra_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.google_mitra_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          findMany: {
            args: Prisma.google_mitra_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>[]
          }
          create: {
            args: Prisma.google_mitra_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          createMany: {
            args: Prisma.google_mitra_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.google_mitra_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          update: {
            args: Prisma.google_mitra_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          deleteMany: {
            args: Prisma.google_mitra_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.google_mitra_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.google_mitra_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$google_mitra_imagesPayload>
          }
          aggregate: {
            args: Prisma.Google_mitra_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogle_mitra_images>
          }
          groupBy: {
            args: Prisma.google_mitra_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Google_mitra_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.google_mitra_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Google_mitra_imagesCountAggregateOutputType> | number
          }
        }
      }
      insta_api_credentials: {
        payload: Prisma.$insta_api_credentialsPayload<ExtArgs>
        fields: Prisma.insta_api_credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.insta_api_credentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.insta_api_credentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          findFirst: {
            args: Prisma.insta_api_credentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.insta_api_credentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          findMany: {
            args: Prisma.insta_api_credentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>[]
          }
          create: {
            args: Prisma.insta_api_credentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          createMany: {
            args: Prisma.insta_api_credentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.insta_api_credentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          update: {
            args: Prisma.insta_api_credentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          deleteMany: {
            args: Prisma.insta_api_credentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.insta_api_credentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.insta_api_credentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insta_api_credentialsPayload>
          }
          aggregate: {
            args: Prisma.Insta_api_credentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsta_api_credentials>
          }
          groupBy: {
            args: Prisma.insta_api_credentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Insta_api_credentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.insta_api_credentialsCountArgs<ExtArgs>
            result: $Utils.Optional<Insta_api_credentialsCountAggregateOutputType> | number
          }
        }
      }
      layanans: {
        payload: Prisma.$layanansPayload<ExtArgs>
        fields: Prisma.layanansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.layanansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.layanansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          findFirst: {
            args: Prisma.layanansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.layanansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          findMany: {
            args: Prisma.layanansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>[]
          }
          create: {
            args: Prisma.layanansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          createMany: {
            args: Prisma.layanansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.layanansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          update: {
            args: Prisma.layanansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          deleteMany: {
            args: Prisma.layanansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.layanansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.layanansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$layanansPayload>
          }
          aggregate: {
            args: Prisma.LayanansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayanans>
          }
          groupBy: {
            args: Prisma.layanansGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayanansGroupByOutputType>[]
          }
          count: {
            args: Prisma.layanansCountArgs<ExtArgs>
            result: $Utils.Optional<LayanansCountAggregateOutputType> | number
          }
        }
      }
      meta_descriptions: {
        payload: Prisma.$meta_descriptionsPayload<ExtArgs>
        fields: Prisma.meta_descriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meta_descriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meta_descriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          findFirst: {
            args: Prisma.meta_descriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meta_descriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          findMany: {
            args: Prisma.meta_descriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>[]
          }
          create: {
            args: Prisma.meta_descriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          createMany: {
            args: Prisma.meta_descriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meta_descriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          update: {
            args: Prisma.meta_descriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          deleteMany: {
            args: Prisma.meta_descriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meta_descriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meta_descriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meta_descriptionsPayload>
          }
          aggregate: {
            args: Prisma.Meta_descriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta_descriptions>
          }
          groupBy: {
            args: Prisma.meta_descriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Meta_descriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.meta_descriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<Meta_descriptionsCountAggregateOutputType> | number
          }
        }
      }
      mitra_menus: {
        payload: Prisma.$mitra_menusPayload<ExtArgs>
        fields: Prisma.mitra_menusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mitra_menusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mitra_menusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          findFirst: {
            args: Prisma.mitra_menusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mitra_menusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          findMany: {
            args: Prisma.mitra_menusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>[]
          }
          create: {
            args: Prisma.mitra_menusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          createMany: {
            args: Prisma.mitra_menusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mitra_menusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          update: {
            args: Prisma.mitra_menusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          deleteMany: {
            args: Prisma.mitra_menusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mitra_menusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mitra_menusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mitra_menusPayload>
          }
          aggregate: {
            args: Prisma.Mitra_menusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMitra_menus>
          }
          groupBy: {
            args: Prisma.mitra_menusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mitra_menusGroupByOutputType>[]
          }
          count: {
            args: Prisma.mitra_menusCountArgs<ExtArgs>
            result: $Utils.Optional<Mitra_menusCountAggregateOutputType> | number
          }
        }
      }
      partners: {
        payload: Prisma.$partnersPayload<ExtArgs>
        fields: Prisma.partnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.partnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.partnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          findFirst: {
            args: Prisma.partnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.partnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          findMany: {
            args: Prisma.partnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>[]
          }
          create: {
            args: Prisma.partnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          createMany: {
            args: Prisma.partnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.partnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          update: {
            args: Prisma.partnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          deleteMany: {
            args: Prisma.partnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.partnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.partnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partnersPayload>
          }
          aggregate: {
            args: Prisma.PartnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartners>
          }
          groupBy: {
            args: Prisma.partnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.partnersCountArgs<ExtArgs>
            result: $Utils.Optional<PartnersCountAggregateOutputType> | number
          }
        }
      }
      produks: {
        payload: Prisma.$produksPayload<ExtArgs>
        fields: Prisma.produksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          findFirst: {
            args: Prisma.produksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          findMany: {
            args: Prisma.produksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>[]
          }
          create: {
            args: Prisma.produksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          createMany: {
            args: Prisma.produksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          update: {
            args: Prisma.produksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          deleteMany: {
            args: Prisma.produksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produksPayload>
          }
          aggregate: {
            args: Prisma.ProduksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduks>
          }
          groupBy: {
            args: Prisma.produksGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduksGroupByOutputType>[]
          }
          count: {
            args: Prisma.produksCountArgs<ExtArgs>
            result: $Utils.Optional<ProduksCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      users_google: {
        payload: Prisma.$users_googlePayload<ExtArgs>
        fields: Prisma.users_googleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_googleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_googleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          findFirst: {
            args: Prisma.users_googleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_googleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          findMany: {
            args: Prisma.users_googleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>[]
          }
          create: {
            args: Prisma.users_googleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          createMany: {
            args: Prisma.users_googleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.users_googleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          update: {
            args: Prisma.users_googleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          deleteMany: {
            args: Prisma.users_googleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_googleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.users_googleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_googlePayload>
          }
          aggregate: {
            args: Prisma.Users_googleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_google>
          }
          groupBy: {
            args: Prisma.users_googleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_googleGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_googleCountArgs<ExtArgs>
            result: $Utils.Optional<Users_googleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    article_tag?: article_tagOmit
    articles?: articlesOmit
    cache?: cacheOmit
    google_mitra_images?: google_mitra_imagesOmit
    insta_api_credentials?: insta_api_credentialsOmit
    layanans?: layanansOmit
    meta_descriptions?: meta_descriptionsOmit
    mitra_menus?: mitra_menusOmit
    partners?: partnersOmit
    produks?: produksOmit
    sessions?: sessionsOmit
    tags?: tagsOmit
    users_google?: users_googleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    article_tag: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tag?: boolean | ArticlesCountOutputTypeCountArticle_tagArgs
  }

  // Custom InputTypes
  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountArticle_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    article_tag: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tag?: boolean | TagsCountOutputTypeCountArticle_tagArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountArticle_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model article_tag
   */

  export type AggregateArticle_tag = {
    _count: Article_tagCountAggregateOutputType | null
    _avg: Article_tagAvgAggregateOutputType | null
    _sum: Article_tagSumAggregateOutputType | null
    _min: Article_tagMinAggregateOutputType | null
    _max: Article_tagMaxAggregateOutputType | null
  }

  export type Article_tagAvgAggregateOutputType = {
    id: number | null
    article_id: number | null
    tag_id: number | null
  }

  export type Article_tagSumAggregateOutputType = {
    id: bigint | null
    article_id: bigint | null
    tag_id: bigint | null
  }

  export type Article_tagMinAggregateOutputType = {
    id: bigint | null
    article_id: bigint | null
    tag_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_tagMaxAggregateOutputType = {
    id: bigint | null
    article_id: bigint | null
    tag_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_tagCountAggregateOutputType = {
    id: number
    article_id: number
    tag_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Article_tagAvgAggregateInputType = {
    id?: true
    article_id?: true
    tag_id?: true
  }

  export type Article_tagSumAggregateInputType = {
    id?: true
    article_id?: true
    tag_id?: true
  }

  export type Article_tagMinAggregateInputType = {
    id?: true
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_tagMaxAggregateInputType = {
    id?: true
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_tagCountAggregateInputType = {
    id?: true
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Article_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_tag to aggregate.
     */
    where?: article_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: article_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned article_tags
    **/
    _count?: true | Article_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Article_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Article_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Article_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Article_tagMaxAggregateInputType
  }

  export type GetArticle_tagAggregateType<T extends Article_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle_tag[P]>
      : GetScalarType<T[P], AggregateArticle_tag[P]>
  }




  export type article_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagWhereInput
    orderBy?: article_tagOrderByWithAggregationInput | article_tagOrderByWithAggregationInput[]
    by: Article_tagScalarFieldEnum[] | Article_tagScalarFieldEnum
    having?: article_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Article_tagCountAggregateInputType | true
    _avg?: Article_tagAvgAggregateInputType
    _sum?: Article_tagSumAggregateInputType
    _min?: Article_tagMinAggregateInputType
    _max?: Article_tagMaxAggregateInputType
  }

  export type Article_tagGroupByOutputType = {
    id: bigint
    article_id: bigint
    tag_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Article_tagCountAggregateOutputType | null
    _avg: Article_tagAvgAggregateOutputType | null
    _sum: Article_tagSumAggregateOutputType | null
    _min: Article_tagMinAggregateOutputType | null
    _max: Article_tagMaxAggregateOutputType | null
  }

  type GetArticle_tagGroupByPayload<T extends article_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Article_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Article_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Article_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Article_tagGroupByOutputType[P]>
        }
      >
    >


  export type article_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    articles?: boolean | articlesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_tag"]>



  export type article_tagSelectScalar = {
    id?: boolean
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type article_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "article_id" | "tag_id" | "created_at" | "updated_at", ExtArgs["result"]["article_tag"]>
  export type article_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | articlesDefaultArgs<ExtArgs>
    tags?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $article_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article_tag"
    objects: {
      articles: Prisma.$articlesPayload<ExtArgs>
      tags: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      article_id: bigint
      tag_id: bigint
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["article_tag"]>
    composites: {}
  }

  type article_tagGetPayload<S extends boolean | null | undefined | article_tagDefaultArgs> = $Result.GetResult<Prisma.$article_tagPayload, S>

  type article_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<article_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Article_tagCountAggregateInputType | true
    }

  export interface article_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article_tag'], meta: { name: 'article_tag' } }
    /**
     * Find zero or one Article_tag that matches the filter.
     * @param {article_tagFindUniqueArgs} args - Arguments to find a Article_tag
     * @example
     * // Get one Article_tag
     * const article_tag = await prisma.article_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends article_tagFindUniqueArgs>(args: SelectSubset<T, article_tagFindUniqueArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {article_tagFindUniqueOrThrowArgs} args - Arguments to find a Article_tag
     * @example
     * // Get one Article_tag
     * const article_tag = await prisma.article_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends article_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, article_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagFindFirstArgs} args - Arguments to find a Article_tag
     * @example
     * // Get one Article_tag
     * const article_tag = await prisma.article_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends article_tagFindFirstArgs>(args?: SelectSubset<T, article_tagFindFirstArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagFindFirstOrThrowArgs} args - Arguments to find a Article_tag
     * @example
     * // Get one Article_tag
     * const article_tag = await prisma.article_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends article_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, article_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Article_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Article_tags
     * const article_tags = await prisma.article_tag.findMany()
     * 
     * // Get first 10 Article_tags
     * const article_tags = await prisma.article_tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const article_tagWithIdOnly = await prisma.article_tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends article_tagFindManyArgs>(args?: SelectSubset<T, article_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article_tag.
     * @param {article_tagCreateArgs} args - Arguments to create a Article_tag.
     * @example
     * // Create one Article_tag
     * const Article_tag = await prisma.article_tag.create({
     *   data: {
     *     // ... data to create a Article_tag
     *   }
     * })
     * 
     */
    create<T extends article_tagCreateArgs>(args: SelectSubset<T, article_tagCreateArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Article_tags.
     * @param {article_tagCreateManyArgs} args - Arguments to create many Article_tags.
     * @example
     * // Create many Article_tags
     * const article_tag = await prisma.article_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends article_tagCreateManyArgs>(args?: SelectSubset<T, article_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article_tag.
     * @param {article_tagDeleteArgs} args - Arguments to delete one Article_tag.
     * @example
     * // Delete one Article_tag
     * const Article_tag = await prisma.article_tag.delete({
     *   where: {
     *     // ... filter to delete one Article_tag
     *   }
     * })
     * 
     */
    delete<T extends article_tagDeleteArgs>(args: SelectSubset<T, article_tagDeleteArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article_tag.
     * @param {article_tagUpdateArgs} args - Arguments to update one Article_tag.
     * @example
     * // Update one Article_tag
     * const article_tag = await prisma.article_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends article_tagUpdateArgs>(args: SelectSubset<T, article_tagUpdateArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Article_tags.
     * @param {article_tagDeleteManyArgs} args - Arguments to filter Article_tags to delete.
     * @example
     * // Delete a few Article_tags
     * const { count } = await prisma.article_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends article_tagDeleteManyArgs>(args?: SelectSubset<T, article_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Article_tags
     * const article_tag = await prisma.article_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends article_tagUpdateManyArgs>(args: SelectSubset<T, article_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article_tag.
     * @param {article_tagUpsertArgs} args - Arguments to update or create a Article_tag.
     * @example
     * // Update or create a Article_tag
     * const article_tag = await prisma.article_tag.upsert({
     *   create: {
     *     // ... data to create a Article_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article_tag we want to update
     *   }
     * })
     */
    upsert<T extends article_tagUpsertArgs>(args: SelectSubset<T, article_tagUpsertArgs<ExtArgs>>): Prisma__article_tagClient<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagCountArgs} args - Arguments to filter Article_tags to count.
     * @example
     * // Count the number of Article_tags
     * const count = await prisma.article_tag.count({
     *   where: {
     *     // ... the filter for the Article_tags we want to count
     *   }
     * })
    **/
    count<T extends article_tagCountArgs>(
      args?: Subset<T, article_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Article_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Article_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Article_tagAggregateArgs>(args: Subset<T, Article_tagAggregateArgs>): Prisma.PrismaPromise<GetArticle_tagAggregateType<T>>

    /**
     * Group by Article_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends article_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: article_tagGroupByArgs['orderBy'] }
        : { orderBy?: article_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, article_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticle_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article_tag model
   */
  readonly fields: article_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__article_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the article_tag model
   */
  interface article_tagFieldRefs {
    readonly id: FieldRef<"article_tag", 'BigInt'>
    readonly article_id: FieldRef<"article_tag", 'BigInt'>
    readonly tag_id: FieldRef<"article_tag", 'BigInt'>
    readonly created_at: FieldRef<"article_tag", 'DateTime'>
    readonly updated_at: FieldRef<"article_tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * article_tag findUnique
   */
  export type article_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter, which article_tag to fetch.
     */
    where: article_tagWhereUniqueInput
  }

  /**
   * article_tag findUniqueOrThrow
   */
  export type article_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter, which article_tag to fetch.
     */
    where: article_tagWhereUniqueInput
  }

  /**
   * article_tag findFirst
   */
  export type article_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter, which article_tag to fetch.
     */
    where?: article_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_tags.
     */
    cursor?: article_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_tags.
     */
    distinct?: Article_tagScalarFieldEnum | Article_tagScalarFieldEnum[]
  }

  /**
   * article_tag findFirstOrThrow
   */
  export type article_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter, which article_tag to fetch.
     */
    where?: article_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_tags.
     */
    cursor?: article_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_tags.
     */
    distinct?: Article_tagScalarFieldEnum | Article_tagScalarFieldEnum[]
  }

  /**
   * article_tag findMany
   */
  export type article_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where?: article_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing article_tags.
     */
    cursor?: article_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    distinct?: Article_tagScalarFieldEnum | Article_tagScalarFieldEnum[]
  }

  /**
   * article_tag create
   */
  export type article_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a article_tag.
     */
    data: XOR<article_tagCreateInput, article_tagUncheckedCreateInput>
  }

  /**
   * article_tag createMany
   */
  export type article_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many article_tags.
     */
    data: article_tagCreateManyInput | article_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article_tag update
   */
  export type article_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a article_tag.
     */
    data: XOR<article_tagUpdateInput, article_tagUncheckedUpdateInput>
    /**
     * Choose, which article_tag to update.
     */
    where: article_tagWhereUniqueInput
  }

  /**
   * article_tag updateMany
   */
  export type article_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update article_tags.
     */
    data: XOR<article_tagUpdateManyMutationInput, article_tagUncheckedUpdateManyInput>
    /**
     * Filter which article_tags to update
     */
    where?: article_tagWhereInput
    /**
     * Limit how many article_tags to update.
     */
    limit?: number
  }

  /**
   * article_tag upsert
   */
  export type article_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the article_tag to update in case it exists.
     */
    where: article_tagWhereUniqueInput
    /**
     * In case the article_tag found by the `where` argument doesn't exist, create a new article_tag with this data.
     */
    create: XOR<article_tagCreateInput, article_tagUncheckedCreateInput>
    /**
     * In case the article_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<article_tagUpdateInput, article_tagUncheckedUpdateInput>
  }

  /**
   * article_tag delete
   */
  export type article_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    /**
     * Filter which article_tag to delete.
     */
    where: article_tagWhereUniqueInput
  }

  /**
   * article_tag deleteMany
   */
  export type article_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_tags to delete
     */
    where?: article_tagWhereInput
    /**
     * Limit how many article_tags to delete.
     */
    limit?: number
  }

  /**
   * article_tag without action
   */
  export type article_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
  }


  /**
   * Model articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: bigint | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    slug: string | null
    content: string | null
    content_detail: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    slug: string | null
    content: string | null
    content_detail: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    content_detail: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    content_detail?: true
    created_at?: true
    updated_at?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    content_detail?: true
    created_at?: true
    updated_at?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    content_detail?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type articlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithAggregationInput | articlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: bigint
    title: string
    slug: string
    content: string
    content_detail: string
    created_at: Date | null
    updated_at: Date | null
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends articlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    content_detail?: boolean
    created_at?: boolean
    updated_at?: boolean
    article_tag?: boolean | articles$article_tagArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>



  export type articlesSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    content_detail?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type articlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "content_detail" | "created_at" | "updated_at", ExtArgs["result"]["articles"]>
  export type articlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tag?: boolean | articles$article_tagArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $articlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articles"
    objects: {
      article_tag: Prisma.$article_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      slug: string
      content: string
      content_detail: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type articlesGetPayload<S extends boolean | null | undefined | articlesDefaultArgs> = $Result.GetResult<Prisma.$articlesPayload, S>

  type articlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articles'], meta: { name: 'articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articlesFindUniqueArgs>(args: SelectSubset<T, articlesFindUniqueArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs>(args: SelectSubset<T, articlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articlesFindFirstArgs>(args?: SelectSubset<T, articlesFindFirstArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs>(args?: SelectSubset<T, articlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articlesFindManyArgs>(args?: SelectSubset<T, articlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends articlesCreateArgs>(args: SelectSubset<T, articlesCreateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articlesCreateManyArgs>(args?: SelectSubset<T, articlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends articlesDeleteArgs>(args: SelectSubset<T, articlesDeleteArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articlesUpdateArgs>(args: SelectSubset<T, articlesUpdateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articlesDeleteManyArgs>(args?: SelectSubset<T, articlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articlesUpdateManyArgs>(args: SelectSubset<T, articlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends articlesUpsertArgs>(args: SelectSubset<T, articlesUpsertArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articlesGroupByArgs['orderBy'] }
        : { orderBy?: articlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articles model
   */
  readonly fields: articlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_tag<T extends articles$article_tagArgs<ExtArgs> = {}>(args?: Subset<T, articles$article_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the articles model
   */
  interface articlesFieldRefs {
    readonly id: FieldRef<"articles", 'BigInt'>
    readonly title: FieldRef<"articles", 'String'>
    readonly slug: FieldRef<"articles", 'String'>
    readonly content: FieldRef<"articles", 'String'>
    readonly content_detail: FieldRef<"articles", 'String'>
    readonly created_at: FieldRef<"articles", 'DateTime'>
    readonly updated_at: FieldRef<"articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * articles findUnique
   */
  export type articlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findFirst
   */
  export type articlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findMany
   */
  export type articlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles create
   */
  export type articlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to create a articles.
     */
    data: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }

  /**
   * articles createMany
   */
  export type articlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articles update
   */
  export type articlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * articles upsert
   */
  export type articlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }

  /**
   * articles delete
   */
  export type articlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * articles.article_tag
   */
  export type articles$article_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    where?: article_tagWhereInput
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    cursor?: article_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_tagScalarFieldEnum | Article_tagScalarFieldEnum[]
  }

  /**
   * articles without action
   */
  export type articlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
  }


  /**
   * Model cache
   */

  export type AggregateCache = {
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  export type CacheAvgAggregateOutputType = {
    expiration: number | null
  }

  export type CacheSumAggregateOutputType = {
    expiration: number | null
  }

  export type CacheMinAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheMaxAggregateOutputType = {
    key: string | null
    value: string | null
    expiration: number | null
  }

  export type CacheCountAggregateOutputType = {
    key: number
    value: number
    expiration: number
    _all: number
  }


  export type CacheAvgAggregateInputType = {
    expiration?: true
  }

  export type CacheSumAggregateInputType = {
    expiration?: true
  }

  export type CacheMinAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheMaxAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
  }

  export type CacheCountAggregateInputType = {
    key?: true
    value?: true
    expiration?: true
    _all?: true
  }

  export type CacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cache to aggregate.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caches
    **/
    _count?: true | CacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CacheMaxAggregateInputType
  }

  export type GetCacheAggregateType<T extends CacheAggregateArgs> = {
        [P in keyof T & keyof AggregateCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCache[P]>
      : GetScalarType<T[P], AggregateCache[P]>
  }




  export type cacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cacheWhereInput
    orderBy?: cacheOrderByWithAggregationInput | cacheOrderByWithAggregationInput[]
    by: CacheScalarFieldEnum[] | CacheScalarFieldEnum
    having?: cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CacheCountAggregateInputType | true
    _avg?: CacheAvgAggregateInputType
    _sum?: CacheSumAggregateInputType
    _min?: CacheMinAggregateInputType
    _max?: CacheMaxAggregateInputType
  }

  export type CacheGroupByOutputType = {
    key: string
    value: string
    expiration: number
    _count: CacheCountAggregateOutputType | null
    _avg: CacheAvgAggregateOutputType | null
    _sum: CacheSumAggregateOutputType | null
    _min: CacheMinAggregateOutputType | null
    _max: CacheMaxAggregateOutputType | null
  }

  type GetCacheGroupByPayload<T extends cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CacheGroupByOutputType[P]>
            : GetScalarType<T[P], CacheGroupByOutputType[P]>
        }
      >
    >


  export type cacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    expiration?: boolean
  }, ExtArgs["result"]["cache"]>



  export type cacheSelectScalar = {
    key?: boolean
    value?: boolean
    expiration?: boolean
  }

  export type cacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "expiration", ExtArgs["result"]["cache"]>

  export type $cachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      expiration: number
    }, ExtArgs["result"]["cache"]>
    composites: {}
  }

  type cacheGetPayload<S extends boolean | null | undefined | cacheDefaultArgs> = $Result.GetResult<Prisma.$cachePayload, S>

  type cacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CacheCountAggregateInputType | true
    }

  export interface cacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cache'], meta: { name: 'cache' } }
    /**
     * Find zero or one Cache that matches the filter.
     * @param {cacheFindUniqueArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cacheFindUniqueArgs>(args: SelectSubset<T, cacheFindUniqueArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cacheFindUniqueOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cacheFindUniqueOrThrowArgs>(args: SelectSubset<T, cacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cacheFindFirstArgs>(args?: SelectSubset<T, cacheFindFirstArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindFirstOrThrowArgs} args - Arguments to find a Cache
     * @example
     * // Get one Cache
     * const cache = await prisma.cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cacheFindFirstOrThrowArgs>(args?: SelectSubset<T, cacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caches
     * const caches = await prisma.cache.findMany()
     * 
     * // Get first 10 Caches
     * const caches = await prisma.cache.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const cacheWithKeyOnly = await prisma.cache.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends cacheFindManyArgs>(args?: SelectSubset<T, cacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cache.
     * @param {cacheCreateArgs} args - Arguments to create a Cache.
     * @example
     * // Create one Cache
     * const Cache = await prisma.cache.create({
     *   data: {
     *     // ... data to create a Cache
     *   }
     * })
     * 
     */
    create<T extends cacheCreateArgs>(args: SelectSubset<T, cacheCreateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caches.
     * @param {cacheCreateManyArgs} args - Arguments to create many Caches.
     * @example
     * // Create many Caches
     * const cache = await prisma.cache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cacheCreateManyArgs>(args?: SelectSubset<T, cacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cache.
     * @param {cacheDeleteArgs} args - Arguments to delete one Cache.
     * @example
     * // Delete one Cache
     * const Cache = await prisma.cache.delete({
     *   where: {
     *     // ... filter to delete one Cache
     *   }
     * })
     * 
     */
    delete<T extends cacheDeleteArgs>(args: SelectSubset<T, cacheDeleteArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cache.
     * @param {cacheUpdateArgs} args - Arguments to update one Cache.
     * @example
     * // Update one Cache
     * const cache = await prisma.cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cacheUpdateArgs>(args: SelectSubset<T, cacheUpdateArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caches.
     * @param {cacheDeleteManyArgs} args - Arguments to filter Caches to delete.
     * @example
     * // Delete a few Caches
     * const { count } = await prisma.cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cacheDeleteManyArgs>(args?: SelectSubset<T, cacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caches
     * const cache = await prisma.cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cacheUpdateManyArgs>(args: SelectSubset<T, cacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cache.
     * @param {cacheUpsertArgs} args - Arguments to update or create a Cache.
     * @example
     * // Update or create a Cache
     * const cache = await prisma.cache.upsert({
     *   create: {
     *     // ... data to create a Cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cache we want to update
     *   }
     * })
     */
    upsert<T extends cacheUpsertArgs>(args: SelectSubset<T, cacheUpsertArgs<ExtArgs>>): Prisma__cacheClient<$Result.GetResult<Prisma.$cachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheCountArgs} args - Arguments to filter Caches to count.
     * @example
     * // Count the number of Caches
     * const count = await prisma.cache.count({
     *   where: {
     *     // ... the filter for the Caches we want to count
     *   }
     * })
    **/
    count<T extends cacheCountArgs>(
      args?: Subset<T, cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CacheAggregateArgs>(args: Subset<T, CacheAggregateArgs>): Prisma.PrismaPromise<GetCacheAggregateType<T>>

    /**
     * Group by Cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cacheGroupByArgs['orderBy'] }
        : { orderBy?: cacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cache model
   */
  readonly fields: cacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cache model
   */
  interface cacheFieldRefs {
    readonly key: FieldRef<"cache", 'String'>
    readonly value: FieldRef<"cache", 'String'>
    readonly expiration: FieldRef<"cache", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cache findUnique
   */
  export type cacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findUniqueOrThrow
   */
  export type cacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache findFirst
   */
  export type cacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findFirstOrThrow
   */
  export type cacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which cache to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caches.
     */
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache findMany
   */
  export type cacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter, which caches to fetch.
     */
    where?: cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caches to fetch.
     */
    orderBy?: cacheOrderByWithRelationInput | cacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caches.
     */
    cursor?: cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caches.
     */
    skip?: number
    distinct?: CacheScalarFieldEnum | CacheScalarFieldEnum[]
  }

  /**
   * cache create
   */
  export type cacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to create a cache.
     */
    data: XOR<cacheCreateInput, cacheUncheckedCreateInput>
  }

  /**
   * cache createMany
   */
  export type cacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caches.
     */
    data: cacheCreateManyInput | cacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cache update
   */
  export type cacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The data needed to update a cache.
     */
    data: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
    /**
     * Choose, which cache to update.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache updateMany
   */
  export type cacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caches.
     */
    data: XOR<cacheUpdateManyMutationInput, cacheUncheckedUpdateManyInput>
    /**
     * Filter which caches to update
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to update.
     */
    limit?: number
  }

  /**
   * cache upsert
   */
  export type cacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * The filter to search for the cache to update in case it exists.
     */
    where: cacheWhereUniqueInput
    /**
     * In case the cache found by the `where` argument doesn't exist, create a new cache with this data.
     */
    create: XOR<cacheCreateInput, cacheUncheckedCreateInput>
    /**
     * In case the cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cacheUpdateInput, cacheUncheckedUpdateInput>
  }

  /**
   * cache delete
   */
  export type cacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
    /**
     * Filter which cache to delete.
     */
    where: cacheWhereUniqueInput
  }

  /**
   * cache deleteMany
   */
  export type cacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caches to delete
     */
    where?: cacheWhereInput
    /**
     * Limit how many caches to delete.
     */
    limit?: number
  }

  /**
   * cache without action
   */
  export type cacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cache
     */
    select?: cacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cache
     */
    omit?: cacheOmit<ExtArgs> | null
  }


  /**
   * Model google_mitra_images
   */

  export type AggregateGoogle_mitra_images = {
    _count: Google_mitra_imagesCountAggregateOutputType | null
    _avg: Google_mitra_imagesAvgAggregateOutputType | null
    _sum: Google_mitra_imagesSumAggregateOutputType | null
    _min: Google_mitra_imagesMinAggregateOutputType | null
    _max: Google_mitra_imagesMaxAggregateOutputType | null
  }

  export type Google_mitra_imagesAvgAggregateOutputType = {
    id: number | null
  }

  export type Google_mitra_imagesSumAggregateOutputType = {
    id: number | null
  }

  export type Google_mitra_imagesMinAggregateOutputType = {
    id: number | null
    folder_id: string | null
    image_id: string | null
    image_name: string | null
    image_path: string | null
    image_desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Google_mitra_imagesMaxAggregateOutputType = {
    id: number | null
    folder_id: string | null
    image_id: string | null
    image_name: string | null
    image_path: string | null
    image_desc: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Google_mitra_imagesCountAggregateOutputType = {
    id: number
    folder_id: number
    image_id: number
    image_name: number
    image_path: number
    image_desc: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Google_mitra_imagesAvgAggregateInputType = {
    id?: true
  }

  export type Google_mitra_imagesSumAggregateInputType = {
    id?: true
  }

  export type Google_mitra_imagesMinAggregateInputType = {
    id?: true
    folder_id?: true
    image_id?: true
    image_name?: true
    image_path?: true
    image_desc?: true
    created_at?: true
    updated_at?: true
  }

  export type Google_mitra_imagesMaxAggregateInputType = {
    id?: true
    folder_id?: true
    image_id?: true
    image_name?: true
    image_path?: true
    image_desc?: true
    created_at?: true
    updated_at?: true
  }

  export type Google_mitra_imagesCountAggregateInputType = {
    id?: true
    folder_id?: true
    image_id?: true
    image_name?: true
    image_path?: true
    image_desc?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Google_mitra_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which google_mitra_images to aggregate.
     */
    where?: google_mitra_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of google_mitra_images to fetch.
     */
    orderBy?: google_mitra_imagesOrderByWithRelationInput | google_mitra_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: google_mitra_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` google_mitra_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` google_mitra_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned google_mitra_images
    **/
    _count?: true | Google_mitra_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Google_mitra_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Google_mitra_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Google_mitra_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Google_mitra_imagesMaxAggregateInputType
  }

  export type GetGoogle_mitra_imagesAggregateType<T extends Google_mitra_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogle_mitra_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogle_mitra_images[P]>
      : GetScalarType<T[P], AggregateGoogle_mitra_images[P]>
  }




  export type google_mitra_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: google_mitra_imagesWhereInput
    orderBy?: google_mitra_imagesOrderByWithAggregationInput | google_mitra_imagesOrderByWithAggregationInput[]
    by: Google_mitra_imagesScalarFieldEnum[] | Google_mitra_imagesScalarFieldEnum
    having?: google_mitra_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Google_mitra_imagesCountAggregateInputType | true
    _avg?: Google_mitra_imagesAvgAggregateInputType
    _sum?: Google_mitra_imagesSumAggregateInputType
    _min?: Google_mitra_imagesMinAggregateInputType
    _max?: Google_mitra_imagesMaxAggregateInputType
  }

  export type Google_mitra_imagesGroupByOutputType = {
    id: number
    folder_id: string
    image_id: string
    image_name: string
    image_path: string | null
    image_desc: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Google_mitra_imagesCountAggregateOutputType | null
    _avg: Google_mitra_imagesAvgAggregateOutputType | null
    _sum: Google_mitra_imagesSumAggregateOutputType | null
    _min: Google_mitra_imagesMinAggregateOutputType | null
    _max: Google_mitra_imagesMaxAggregateOutputType | null
  }

  type GetGoogle_mitra_imagesGroupByPayload<T extends google_mitra_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Google_mitra_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Google_mitra_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Google_mitra_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Google_mitra_imagesGroupByOutputType[P]>
        }
      >
    >


  export type google_mitra_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folder_id?: boolean
    image_id?: boolean
    image_name?: boolean
    image_path?: boolean
    image_desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["google_mitra_images"]>



  export type google_mitra_imagesSelectScalar = {
    id?: boolean
    folder_id?: boolean
    image_id?: boolean
    image_name?: boolean
    image_path?: boolean
    image_desc?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type google_mitra_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "folder_id" | "image_id" | "image_name" | "image_path" | "image_desc" | "created_at" | "updated_at", ExtArgs["result"]["google_mitra_images"]>

  export type $google_mitra_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "google_mitra_images"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      folder_id: string
      image_id: string
      image_name: string
      image_path: string | null
      image_desc: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["google_mitra_images"]>
    composites: {}
  }

  type google_mitra_imagesGetPayload<S extends boolean | null | undefined | google_mitra_imagesDefaultArgs> = $Result.GetResult<Prisma.$google_mitra_imagesPayload, S>

  type google_mitra_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<google_mitra_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Google_mitra_imagesCountAggregateInputType | true
    }

  export interface google_mitra_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['google_mitra_images'], meta: { name: 'google_mitra_images' } }
    /**
     * Find zero or one Google_mitra_images that matches the filter.
     * @param {google_mitra_imagesFindUniqueArgs} args - Arguments to find a Google_mitra_images
     * @example
     * // Get one Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends google_mitra_imagesFindUniqueArgs>(args: SelectSubset<T, google_mitra_imagesFindUniqueArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Google_mitra_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {google_mitra_imagesFindUniqueOrThrowArgs} args - Arguments to find a Google_mitra_images
     * @example
     * // Get one Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends google_mitra_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, google_mitra_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Google_mitra_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesFindFirstArgs} args - Arguments to find a Google_mitra_images
     * @example
     * // Get one Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends google_mitra_imagesFindFirstArgs>(args?: SelectSubset<T, google_mitra_imagesFindFirstArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Google_mitra_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesFindFirstOrThrowArgs} args - Arguments to find a Google_mitra_images
     * @example
     * // Get one Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends google_mitra_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, google_mitra_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Google_mitra_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findMany()
     * 
     * // Get first 10 Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const google_mitra_imagesWithIdOnly = await prisma.google_mitra_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends google_mitra_imagesFindManyArgs>(args?: SelectSubset<T, google_mitra_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Google_mitra_images.
     * @param {google_mitra_imagesCreateArgs} args - Arguments to create a Google_mitra_images.
     * @example
     * // Create one Google_mitra_images
     * const Google_mitra_images = await prisma.google_mitra_images.create({
     *   data: {
     *     // ... data to create a Google_mitra_images
     *   }
     * })
     * 
     */
    create<T extends google_mitra_imagesCreateArgs>(args: SelectSubset<T, google_mitra_imagesCreateArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Google_mitra_images.
     * @param {google_mitra_imagesCreateManyArgs} args - Arguments to create many Google_mitra_images.
     * @example
     * // Create many Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends google_mitra_imagesCreateManyArgs>(args?: SelectSubset<T, google_mitra_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Google_mitra_images.
     * @param {google_mitra_imagesDeleteArgs} args - Arguments to delete one Google_mitra_images.
     * @example
     * // Delete one Google_mitra_images
     * const Google_mitra_images = await prisma.google_mitra_images.delete({
     *   where: {
     *     // ... filter to delete one Google_mitra_images
     *   }
     * })
     * 
     */
    delete<T extends google_mitra_imagesDeleteArgs>(args: SelectSubset<T, google_mitra_imagesDeleteArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Google_mitra_images.
     * @param {google_mitra_imagesUpdateArgs} args - Arguments to update one Google_mitra_images.
     * @example
     * // Update one Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends google_mitra_imagesUpdateArgs>(args: SelectSubset<T, google_mitra_imagesUpdateArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Google_mitra_images.
     * @param {google_mitra_imagesDeleteManyArgs} args - Arguments to filter Google_mitra_images to delete.
     * @example
     * // Delete a few Google_mitra_images
     * const { count } = await prisma.google_mitra_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends google_mitra_imagesDeleteManyArgs>(args?: SelectSubset<T, google_mitra_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Google_mitra_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends google_mitra_imagesUpdateManyArgs>(args: SelectSubset<T, google_mitra_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Google_mitra_images.
     * @param {google_mitra_imagesUpsertArgs} args - Arguments to update or create a Google_mitra_images.
     * @example
     * // Update or create a Google_mitra_images
     * const google_mitra_images = await prisma.google_mitra_images.upsert({
     *   create: {
     *     // ... data to create a Google_mitra_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Google_mitra_images we want to update
     *   }
     * })
     */
    upsert<T extends google_mitra_imagesUpsertArgs>(args: SelectSubset<T, google_mitra_imagesUpsertArgs<ExtArgs>>): Prisma__google_mitra_imagesClient<$Result.GetResult<Prisma.$google_mitra_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Google_mitra_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesCountArgs} args - Arguments to filter Google_mitra_images to count.
     * @example
     * // Count the number of Google_mitra_images
     * const count = await prisma.google_mitra_images.count({
     *   where: {
     *     // ... the filter for the Google_mitra_images we want to count
     *   }
     * })
    **/
    count<T extends google_mitra_imagesCountArgs>(
      args?: Subset<T, google_mitra_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Google_mitra_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Google_mitra_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Google_mitra_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Google_mitra_imagesAggregateArgs>(args: Subset<T, Google_mitra_imagesAggregateArgs>): Prisma.PrismaPromise<GetGoogle_mitra_imagesAggregateType<T>>

    /**
     * Group by Google_mitra_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {google_mitra_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends google_mitra_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: google_mitra_imagesGroupByArgs['orderBy'] }
        : { orderBy?: google_mitra_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, google_mitra_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogle_mitra_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the google_mitra_images model
   */
  readonly fields: google_mitra_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for google_mitra_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__google_mitra_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the google_mitra_images model
   */
  interface google_mitra_imagesFieldRefs {
    readonly id: FieldRef<"google_mitra_images", 'Int'>
    readonly folder_id: FieldRef<"google_mitra_images", 'String'>
    readonly image_id: FieldRef<"google_mitra_images", 'String'>
    readonly image_name: FieldRef<"google_mitra_images", 'String'>
    readonly image_path: FieldRef<"google_mitra_images", 'String'>
    readonly image_desc: FieldRef<"google_mitra_images", 'String'>
    readonly created_at: FieldRef<"google_mitra_images", 'DateTime'>
    readonly updated_at: FieldRef<"google_mitra_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * google_mitra_images findUnique
   */
  export type google_mitra_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter, which google_mitra_images to fetch.
     */
    where: google_mitra_imagesWhereUniqueInput
  }

  /**
   * google_mitra_images findUniqueOrThrow
   */
  export type google_mitra_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter, which google_mitra_images to fetch.
     */
    where: google_mitra_imagesWhereUniqueInput
  }

  /**
   * google_mitra_images findFirst
   */
  export type google_mitra_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter, which google_mitra_images to fetch.
     */
    where?: google_mitra_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of google_mitra_images to fetch.
     */
    orderBy?: google_mitra_imagesOrderByWithRelationInput | google_mitra_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for google_mitra_images.
     */
    cursor?: google_mitra_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` google_mitra_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` google_mitra_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of google_mitra_images.
     */
    distinct?: Google_mitra_imagesScalarFieldEnum | Google_mitra_imagesScalarFieldEnum[]
  }

  /**
   * google_mitra_images findFirstOrThrow
   */
  export type google_mitra_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter, which google_mitra_images to fetch.
     */
    where?: google_mitra_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of google_mitra_images to fetch.
     */
    orderBy?: google_mitra_imagesOrderByWithRelationInput | google_mitra_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for google_mitra_images.
     */
    cursor?: google_mitra_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` google_mitra_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` google_mitra_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of google_mitra_images.
     */
    distinct?: Google_mitra_imagesScalarFieldEnum | Google_mitra_imagesScalarFieldEnum[]
  }

  /**
   * google_mitra_images findMany
   */
  export type google_mitra_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter, which google_mitra_images to fetch.
     */
    where?: google_mitra_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of google_mitra_images to fetch.
     */
    orderBy?: google_mitra_imagesOrderByWithRelationInput | google_mitra_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing google_mitra_images.
     */
    cursor?: google_mitra_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` google_mitra_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` google_mitra_images.
     */
    skip?: number
    distinct?: Google_mitra_imagesScalarFieldEnum | Google_mitra_imagesScalarFieldEnum[]
  }

  /**
   * google_mitra_images create
   */
  export type google_mitra_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * The data needed to create a google_mitra_images.
     */
    data: XOR<google_mitra_imagesCreateInput, google_mitra_imagesUncheckedCreateInput>
  }

  /**
   * google_mitra_images createMany
   */
  export type google_mitra_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many google_mitra_images.
     */
    data: google_mitra_imagesCreateManyInput | google_mitra_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * google_mitra_images update
   */
  export type google_mitra_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * The data needed to update a google_mitra_images.
     */
    data: XOR<google_mitra_imagesUpdateInput, google_mitra_imagesUncheckedUpdateInput>
    /**
     * Choose, which google_mitra_images to update.
     */
    where: google_mitra_imagesWhereUniqueInput
  }

  /**
   * google_mitra_images updateMany
   */
  export type google_mitra_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update google_mitra_images.
     */
    data: XOR<google_mitra_imagesUpdateManyMutationInput, google_mitra_imagesUncheckedUpdateManyInput>
    /**
     * Filter which google_mitra_images to update
     */
    where?: google_mitra_imagesWhereInput
    /**
     * Limit how many google_mitra_images to update.
     */
    limit?: number
  }

  /**
   * google_mitra_images upsert
   */
  export type google_mitra_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * The filter to search for the google_mitra_images to update in case it exists.
     */
    where: google_mitra_imagesWhereUniqueInput
    /**
     * In case the google_mitra_images found by the `where` argument doesn't exist, create a new google_mitra_images with this data.
     */
    create: XOR<google_mitra_imagesCreateInput, google_mitra_imagesUncheckedCreateInput>
    /**
     * In case the google_mitra_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<google_mitra_imagesUpdateInput, google_mitra_imagesUncheckedUpdateInput>
  }

  /**
   * google_mitra_images delete
   */
  export type google_mitra_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
    /**
     * Filter which google_mitra_images to delete.
     */
    where: google_mitra_imagesWhereUniqueInput
  }

  /**
   * google_mitra_images deleteMany
   */
  export type google_mitra_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which google_mitra_images to delete
     */
    where?: google_mitra_imagesWhereInput
    /**
     * Limit how many google_mitra_images to delete.
     */
    limit?: number
  }

  /**
   * google_mitra_images without action
   */
  export type google_mitra_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the google_mitra_images
     */
    select?: google_mitra_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the google_mitra_images
     */
    omit?: google_mitra_imagesOmit<ExtArgs> | null
  }


  /**
   * Model insta_api_credentials
   */

  export type AggregateInsta_api_credentials = {
    _count: Insta_api_credentialsCountAggregateOutputType | null
    _avg: Insta_api_credentialsAvgAggregateOutputType | null
    _sum: Insta_api_credentialsSumAggregateOutputType | null
    _min: Insta_api_credentialsMinAggregateOutputType | null
    _max: Insta_api_credentialsMaxAggregateOutputType | null
  }

  export type Insta_api_credentialsAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type Insta_api_credentialsSumAggregateOutputType = {
    id: number | null
    client_id: bigint | null
  }

  export type Insta_api_credentialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    client_id: bigint | null
    redirect_uri: string | null
    scope: string | null
    client_secret: string | null
    access_token: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type Insta_api_credentialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    client_id: bigint | null
    redirect_uri: string | null
    scope: string | null
    client_secret: string | null
    access_token: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type Insta_api_credentialsCountAggregateOutputType = {
    id: number
    name: number
    client_id: number
    redirect_uri: number
    scope: number
    client_secret: number
    access_token: number
    created_date: number
    updated_date: number
    _all: number
  }


  export type Insta_api_credentialsAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type Insta_api_credentialsSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type Insta_api_credentialsMinAggregateInputType = {
    id?: true
    name?: true
    client_id?: true
    redirect_uri?: true
    scope?: true
    client_secret?: true
    access_token?: true
    created_date?: true
    updated_date?: true
  }

  export type Insta_api_credentialsMaxAggregateInputType = {
    id?: true
    name?: true
    client_id?: true
    redirect_uri?: true
    scope?: true
    client_secret?: true
    access_token?: true
    created_date?: true
    updated_date?: true
  }

  export type Insta_api_credentialsCountAggregateInputType = {
    id?: true
    name?: true
    client_id?: true
    redirect_uri?: true
    scope?: true
    client_secret?: true
    access_token?: true
    created_date?: true
    updated_date?: true
    _all?: true
  }

  export type Insta_api_credentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insta_api_credentials to aggregate.
     */
    where?: insta_api_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insta_api_credentials to fetch.
     */
    orderBy?: insta_api_credentialsOrderByWithRelationInput | insta_api_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: insta_api_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insta_api_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insta_api_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned insta_api_credentials
    **/
    _count?: true | Insta_api_credentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Insta_api_credentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Insta_api_credentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Insta_api_credentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Insta_api_credentialsMaxAggregateInputType
  }

  export type GetInsta_api_credentialsAggregateType<T extends Insta_api_credentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateInsta_api_credentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsta_api_credentials[P]>
      : GetScalarType<T[P], AggregateInsta_api_credentials[P]>
  }




  export type insta_api_credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insta_api_credentialsWhereInput
    orderBy?: insta_api_credentialsOrderByWithAggregationInput | insta_api_credentialsOrderByWithAggregationInput[]
    by: Insta_api_credentialsScalarFieldEnum[] | Insta_api_credentialsScalarFieldEnum
    having?: insta_api_credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Insta_api_credentialsCountAggregateInputType | true
    _avg?: Insta_api_credentialsAvgAggregateInputType
    _sum?: Insta_api_credentialsSumAggregateInputType
    _min?: Insta_api_credentialsMinAggregateInputType
    _max?: Insta_api_credentialsMaxAggregateInputType
  }

  export type Insta_api_credentialsGroupByOutputType = {
    id: number
    name: string | null
    client_id: bigint
    redirect_uri: string | null
    scope: string | null
    client_secret: string | null
    access_token: string | null
    created_date: Date
    updated_date: Date | null
    _count: Insta_api_credentialsCountAggregateOutputType | null
    _avg: Insta_api_credentialsAvgAggregateOutputType | null
    _sum: Insta_api_credentialsSumAggregateOutputType | null
    _min: Insta_api_credentialsMinAggregateOutputType | null
    _max: Insta_api_credentialsMaxAggregateOutputType | null
  }

  type GetInsta_api_credentialsGroupByPayload<T extends insta_api_credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Insta_api_credentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Insta_api_credentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Insta_api_credentialsGroupByOutputType[P]>
            : GetScalarType<T[P], Insta_api_credentialsGroupByOutputType[P]>
        }
      >
    >


  export type insta_api_credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    scope?: boolean
    client_secret?: boolean
    access_token?: boolean
    created_date?: boolean
    updated_date?: boolean
  }, ExtArgs["result"]["insta_api_credentials"]>



  export type insta_api_credentialsSelectScalar = {
    id?: boolean
    name?: boolean
    client_id?: boolean
    redirect_uri?: boolean
    scope?: boolean
    client_secret?: boolean
    access_token?: boolean
    created_date?: boolean
    updated_date?: boolean
  }

  export type insta_api_credentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "client_id" | "redirect_uri" | "scope" | "client_secret" | "access_token" | "created_date" | "updated_date", ExtArgs["result"]["insta_api_credentials"]>

  export type $insta_api_credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "insta_api_credentials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      client_id: bigint
      redirect_uri: string | null
      scope: string | null
      client_secret: string | null
      access_token: string | null
      created_date: Date
      updated_date: Date | null
    }, ExtArgs["result"]["insta_api_credentials"]>
    composites: {}
  }

  type insta_api_credentialsGetPayload<S extends boolean | null | undefined | insta_api_credentialsDefaultArgs> = $Result.GetResult<Prisma.$insta_api_credentialsPayload, S>

  type insta_api_credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<insta_api_credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Insta_api_credentialsCountAggregateInputType | true
    }

  export interface insta_api_credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['insta_api_credentials'], meta: { name: 'insta_api_credentials' } }
    /**
     * Find zero or one Insta_api_credentials that matches the filter.
     * @param {insta_api_credentialsFindUniqueArgs} args - Arguments to find a Insta_api_credentials
     * @example
     * // Get one Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends insta_api_credentialsFindUniqueArgs>(args: SelectSubset<T, insta_api_credentialsFindUniqueArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insta_api_credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {insta_api_credentialsFindUniqueOrThrowArgs} args - Arguments to find a Insta_api_credentials
     * @example
     * // Get one Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends insta_api_credentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, insta_api_credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insta_api_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsFindFirstArgs} args - Arguments to find a Insta_api_credentials
     * @example
     * // Get one Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends insta_api_credentialsFindFirstArgs>(args?: SelectSubset<T, insta_api_credentialsFindFirstArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insta_api_credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsFindFirstOrThrowArgs} args - Arguments to find a Insta_api_credentials
     * @example
     * // Get one Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends insta_api_credentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, insta_api_credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insta_api_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findMany()
     * 
     * // Get first 10 Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insta_api_credentialsWithIdOnly = await prisma.insta_api_credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends insta_api_credentialsFindManyArgs>(args?: SelectSubset<T, insta_api_credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insta_api_credentials.
     * @param {insta_api_credentialsCreateArgs} args - Arguments to create a Insta_api_credentials.
     * @example
     * // Create one Insta_api_credentials
     * const Insta_api_credentials = await prisma.insta_api_credentials.create({
     *   data: {
     *     // ... data to create a Insta_api_credentials
     *   }
     * })
     * 
     */
    create<T extends insta_api_credentialsCreateArgs>(args: SelectSubset<T, insta_api_credentialsCreateArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insta_api_credentials.
     * @param {insta_api_credentialsCreateManyArgs} args - Arguments to create many Insta_api_credentials.
     * @example
     * // Create many Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends insta_api_credentialsCreateManyArgs>(args?: SelectSubset<T, insta_api_credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Insta_api_credentials.
     * @param {insta_api_credentialsDeleteArgs} args - Arguments to delete one Insta_api_credentials.
     * @example
     * // Delete one Insta_api_credentials
     * const Insta_api_credentials = await prisma.insta_api_credentials.delete({
     *   where: {
     *     // ... filter to delete one Insta_api_credentials
     *   }
     * })
     * 
     */
    delete<T extends insta_api_credentialsDeleteArgs>(args: SelectSubset<T, insta_api_credentialsDeleteArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insta_api_credentials.
     * @param {insta_api_credentialsUpdateArgs} args - Arguments to update one Insta_api_credentials.
     * @example
     * // Update one Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends insta_api_credentialsUpdateArgs>(args: SelectSubset<T, insta_api_credentialsUpdateArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insta_api_credentials.
     * @param {insta_api_credentialsDeleteManyArgs} args - Arguments to filter Insta_api_credentials to delete.
     * @example
     * // Delete a few Insta_api_credentials
     * const { count } = await prisma.insta_api_credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends insta_api_credentialsDeleteManyArgs>(args?: SelectSubset<T, insta_api_credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insta_api_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends insta_api_credentialsUpdateManyArgs>(args: SelectSubset<T, insta_api_credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insta_api_credentials.
     * @param {insta_api_credentialsUpsertArgs} args - Arguments to update or create a Insta_api_credentials.
     * @example
     * // Update or create a Insta_api_credentials
     * const insta_api_credentials = await prisma.insta_api_credentials.upsert({
     *   create: {
     *     // ... data to create a Insta_api_credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insta_api_credentials we want to update
     *   }
     * })
     */
    upsert<T extends insta_api_credentialsUpsertArgs>(args: SelectSubset<T, insta_api_credentialsUpsertArgs<ExtArgs>>): Prisma__insta_api_credentialsClient<$Result.GetResult<Prisma.$insta_api_credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insta_api_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsCountArgs} args - Arguments to filter Insta_api_credentials to count.
     * @example
     * // Count the number of Insta_api_credentials
     * const count = await prisma.insta_api_credentials.count({
     *   where: {
     *     // ... the filter for the Insta_api_credentials we want to count
     *   }
     * })
    **/
    count<T extends insta_api_credentialsCountArgs>(
      args?: Subset<T, insta_api_credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Insta_api_credentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insta_api_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Insta_api_credentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Insta_api_credentialsAggregateArgs>(args: Subset<T, Insta_api_credentialsAggregateArgs>): Prisma.PrismaPromise<GetInsta_api_credentialsAggregateType<T>>

    /**
     * Group by Insta_api_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insta_api_credentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends insta_api_credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insta_api_credentialsGroupByArgs['orderBy'] }
        : { orderBy?: insta_api_credentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, insta_api_credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsta_api_credentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the insta_api_credentials model
   */
  readonly fields: insta_api_credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insta_api_credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insta_api_credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the insta_api_credentials model
   */
  interface insta_api_credentialsFieldRefs {
    readonly id: FieldRef<"insta_api_credentials", 'Int'>
    readonly name: FieldRef<"insta_api_credentials", 'String'>
    readonly client_id: FieldRef<"insta_api_credentials", 'BigInt'>
    readonly redirect_uri: FieldRef<"insta_api_credentials", 'String'>
    readonly scope: FieldRef<"insta_api_credentials", 'String'>
    readonly client_secret: FieldRef<"insta_api_credentials", 'String'>
    readonly access_token: FieldRef<"insta_api_credentials", 'String'>
    readonly created_date: FieldRef<"insta_api_credentials", 'DateTime'>
    readonly updated_date: FieldRef<"insta_api_credentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * insta_api_credentials findUnique
   */
  export type insta_api_credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter, which insta_api_credentials to fetch.
     */
    where: insta_api_credentialsWhereUniqueInput
  }

  /**
   * insta_api_credentials findUniqueOrThrow
   */
  export type insta_api_credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter, which insta_api_credentials to fetch.
     */
    where: insta_api_credentialsWhereUniqueInput
  }

  /**
   * insta_api_credentials findFirst
   */
  export type insta_api_credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter, which insta_api_credentials to fetch.
     */
    where?: insta_api_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insta_api_credentials to fetch.
     */
    orderBy?: insta_api_credentialsOrderByWithRelationInput | insta_api_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insta_api_credentials.
     */
    cursor?: insta_api_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insta_api_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insta_api_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insta_api_credentials.
     */
    distinct?: Insta_api_credentialsScalarFieldEnum | Insta_api_credentialsScalarFieldEnum[]
  }

  /**
   * insta_api_credentials findFirstOrThrow
   */
  export type insta_api_credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter, which insta_api_credentials to fetch.
     */
    where?: insta_api_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insta_api_credentials to fetch.
     */
    orderBy?: insta_api_credentialsOrderByWithRelationInput | insta_api_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insta_api_credentials.
     */
    cursor?: insta_api_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insta_api_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insta_api_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insta_api_credentials.
     */
    distinct?: Insta_api_credentialsScalarFieldEnum | Insta_api_credentialsScalarFieldEnum[]
  }

  /**
   * insta_api_credentials findMany
   */
  export type insta_api_credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter, which insta_api_credentials to fetch.
     */
    where?: insta_api_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insta_api_credentials to fetch.
     */
    orderBy?: insta_api_credentialsOrderByWithRelationInput | insta_api_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing insta_api_credentials.
     */
    cursor?: insta_api_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insta_api_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insta_api_credentials.
     */
    skip?: number
    distinct?: Insta_api_credentialsScalarFieldEnum | Insta_api_credentialsScalarFieldEnum[]
  }

  /**
   * insta_api_credentials create
   */
  export type insta_api_credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * The data needed to create a insta_api_credentials.
     */
    data?: XOR<insta_api_credentialsCreateInput, insta_api_credentialsUncheckedCreateInput>
  }

  /**
   * insta_api_credentials createMany
   */
  export type insta_api_credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insta_api_credentials.
     */
    data: insta_api_credentialsCreateManyInput | insta_api_credentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * insta_api_credentials update
   */
  export type insta_api_credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * The data needed to update a insta_api_credentials.
     */
    data: XOR<insta_api_credentialsUpdateInput, insta_api_credentialsUncheckedUpdateInput>
    /**
     * Choose, which insta_api_credentials to update.
     */
    where: insta_api_credentialsWhereUniqueInput
  }

  /**
   * insta_api_credentials updateMany
   */
  export type insta_api_credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insta_api_credentials.
     */
    data: XOR<insta_api_credentialsUpdateManyMutationInput, insta_api_credentialsUncheckedUpdateManyInput>
    /**
     * Filter which insta_api_credentials to update
     */
    where?: insta_api_credentialsWhereInput
    /**
     * Limit how many insta_api_credentials to update.
     */
    limit?: number
  }

  /**
   * insta_api_credentials upsert
   */
  export type insta_api_credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * The filter to search for the insta_api_credentials to update in case it exists.
     */
    where: insta_api_credentialsWhereUniqueInput
    /**
     * In case the insta_api_credentials found by the `where` argument doesn't exist, create a new insta_api_credentials with this data.
     */
    create: XOR<insta_api_credentialsCreateInput, insta_api_credentialsUncheckedCreateInput>
    /**
     * In case the insta_api_credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insta_api_credentialsUpdateInput, insta_api_credentialsUncheckedUpdateInput>
  }

  /**
   * insta_api_credentials delete
   */
  export type insta_api_credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
    /**
     * Filter which insta_api_credentials to delete.
     */
    where: insta_api_credentialsWhereUniqueInput
  }

  /**
   * insta_api_credentials deleteMany
   */
  export type insta_api_credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insta_api_credentials to delete
     */
    where?: insta_api_credentialsWhereInput
    /**
     * Limit how many insta_api_credentials to delete.
     */
    limit?: number
  }

  /**
   * insta_api_credentials without action
   */
  export type insta_api_credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insta_api_credentials
     */
    select?: insta_api_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insta_api_credentials
     */
    omit?: insta_api_credentialsOmit<ExtArgs> | null
  }


  /**
   * Model layanans
   */

  export type AggregateLayanans = {
    _count: LayanansCountAggregateOutputType | null
    _avg: LayanansAvgAggregateOutputType | null
    _sum: LayanansSumAggregateOutputType | null
    _min: LayanansMinAggregateOutputType | null
    _max: LayanansMaxAggregateOutputType | null
  }

  export type LayanansAvgAggregateOutputType = {
    id: number | null
  }

  export type LayanansSumAggregateOutputType = {
    id: bigint | null
  }

  export type LayanansMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LayanansMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LayanansCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LayanansAvgAggregateInputType = {
    id?: true
  }

  export type LayanansSumAggregateInputType = {
    id?: true
  }

  export type LayanansMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type LayanansMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type LayanansCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LayanansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which layanans to aggregate.
     */
    where?: layanansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of layanans to fetch.
     */
    orderBy?: layanansOrderByWithRelationInput | layanansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: layanansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned layanans
    **/
    _count?: true | LayanansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayanansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayanansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayanansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayanansMaxAggregateInputType
  }

  export type GetLayanansAggregateType<T extends LayanansAggregateArgs> = {
        [P in keyof T & keyof AggregateLayanans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayanans[P]>
      : GetScalarType<T[P], AggregateLayanans[P]>
  }




  export type layanansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: layanansWhereInput
    orderBy?: layanansOrderByWithAggregationInput | layanansOrderByWithAggregationInput[]
    by: LayanansScalarFieldEnum[] | LayanansScalarFieldEnum
    having?: layanansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayanansCountAggregateInputType | true
    _avg?: LayanansAvgAggregateInputType
    _sum?: LayanansSumAggregateInputType
    _min?: LayanansMinAggregateInputType
    _max?: LayanansMaxAggregateInputType
  }

  export type LayanansGroupByOutputType = {
    id: bigint
    title: string
    description: string
    image: string
    created_at: Date | null
    updated_at: Date | null
    _count: LayanansCountAggregateOutputType | null
    _avg: LayanansAvgAggregateOutputType | null
    _sum: LayanansSumAggregateOutputType | null
    _min: LayanansMinAggregateOutputType | null
    _max: LayanansMaxAggregateOutputType | null
  }

  type GetLayanansGroupByPayload<T extends layanansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayanansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayanansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayanansGroupByOutputType[P]>
            : GetScalarType<T[P], LayanansGroupByOutputType[P]>
        }
      >
    >


  export type layanansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["layanans"]>



  export type layanansSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type layanansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "created_at" | "updated_at", ExtArgs["result"]["layanans"]>

  export type $layanansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "layanans"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      description: string
      image: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["layanans"]>
    composites: {}
  }

  type layanansGetPayload<S extends boolean | null | undefined | layanansDefaultArgs> = $Result.GetResult<Prisma.$layanansPayload, S>

  type layanansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<layanansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayanansCountAggregateInputType | true
    }

  export interface layanansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['layanans'], meta: { name: 'layanans' } }
    /**
     * Find zero or one Layanans that matches the filter.
     * @param {layanansFindUniqueArgs} args - Arguments to find a Layanans
     * @example
     * // Get one Layanans
     * const layanans = await prisma.layanans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends layanansFindUniqueArgs>(args: SelectSubset<T, layanansFindUniqueArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layanans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {layanansFindUniqueOrThrowArgs} args - Arguments to find a Layanans
     * @example
     * // Get one Layanans
     * const layanans = await prisma.layanans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends layanansFindUniqueOrThrowArgs>(args: SelectSubset<T, layanansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansFindFirstArgs} args - Arguments to find a Layanans
     * @example
     * // Get one Layanans
     * const layanans = await prisma.layanans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends layanansFindFirstArgs>(args?: SelectSubset<T, layanansFindFirstArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansFindFirstOrThrowArgs} args - Arguments to find a Layanans
     * @example
     * // Get one Layanans
     * const layanans = await prisma.layanans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends layanansFindFirstOrThrowArgs>(args?: SelectSubset<T, layanansFindFirstOrThrowArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layanans
     * const layanans = await prisma.layanans.findMany()
     * 
     * // Get first 10 Layanans
     * const layanans = await prisma.layanans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layanansWithIdOnly = await prisma.layanans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends layanansFindManyArgs>(args?: SelectSubset<T, layanansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layanans.
     * @param {layanansCreateArgs} args - Arguments to create a Layanans.
     * @example
     * // Create one Layanans
     * const Layanans = await prisma.layanans.create({
     *   data: {
     *     // ... data to create a Layanans
     *   }
     * })
     * 
     */
    create<T extends layanansCreateArgs>(args: SelectSubset<T, layanansCreateArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layanans.
     * @param {layanansCreateManyArgs} args - Arguments to create many Layanans.
     * @example
     * // Create many Layanans
     * const layanans = await prisma.layanans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends layanansCreateManyArgs>(args?: SelectSubset<T, layanansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Layanans.
     * @param {layanansDeleteArgs} args - Arguments to delete one Layanans.
     * @example
     * // Delete one Layanans
     * const Layanans = await prisma.layanans.delete({
     *   where: {
     *     // ... filter to delete one Layanans
     *   }
     * })
     * 
     */
    delete<T extends layanansDeleteArgs>(args: SelectSubset<T, layanansDeleteArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layanans.
     * @param {layanansUpdateArgs} args - Arguments to update one Layanans.
     * @example
     * // Update one Layanans
     * const layanans = await prisma.layanans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends layanansUpdateArgs>(args: SelectSubset<T, layanansUpdateArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layanans.
     * @param {layanansDeleteManyArgs} args - Arguments to filter Layanans to delete.
     * @example
     * // Delete a few Layanans
     * const { count } = await prisma.layanans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends layanansDeleteManyArgs>(args?: SelectSubset<T, layanansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layanans
     * const layanans = await prisma.layanans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends layanansUpdateManyArgs>(args: SelectSubset<T, layanansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Layanans.
     * @param {layanansUpsertArgs} args - Arguments to update or create a Layanans.
     * @example
     * // Update or create a Layanans
     * const layanans = await prisma.layanans.upsert({
     *   create: {
     *     // ... data to create a Layanans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layanans we want to update
     *   }
     * })
     */
    upsert<T extends layanansUpsertArgs>(args: SelectSubset<T, layanansUpsertArgs<ExtArgs>>): Prisma__layanansClient<$Result.GetResult<Prisma.$layanansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansCountArgs} args - Arguments to filter Layanans to count.
     * @example
     * // Count the number of Layanans
     * const count = await prisma.layanans.count({
     *   where: {
     *     // ... the filter for the Layanans we want to count
     *   }
     * })
    **/
    count<T extends layanansCountArgs>(
      args?: Subset<T, layanansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayanansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayanansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LayanansAggregateArgs>(args: Subset<T, LayanansAggregateArgs>): Prisma.PrismaPromise<GetLayanansAggregateType<T>>

    /**
     * Group by Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {layanansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends layanansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: layanansGroupByArgs['orderBy'] }
        : { orderBy?: layanansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, layanansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayanansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the layanans model
   */
  readonly fields: layanansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for layanans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__layanansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the layanans model
   */
  interface layanansFieldRefs {
    readonly id: FieldRef<"layanans", 'BigInt'>
    readonly title: FieldRef<"layanans", 'String'>
    readonly description: FieldRef<"layanans", 'String'>
    readonly image: FieldRef<"layanans", 'String'>
    readonly created_at: FieldRef<"layanans", 'DateTime'>
    readonly updated_at: FieldRef<"layanans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * layanans findUnique
   */
  export type layanansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter, which layanans to fetch.
     */
    where: layanansWhereUniqueInput
  }

  /**
   * layanans findUniqueOrThrow
   */
  export type layanansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter, which layanans to fetch.
     */
    where: layanansWhereUniqueInput
  }

  /**
   * layanans findFirst
   */
  export type layanansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter, which layanans to fetch.
     */
    where?: layanansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of layanans to fetch.
     */
    orderBy?: layanansOrderByWithRelationInput | layanansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for layanans.
     */
    cursor?: layanansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of layanans.
     */
    distinct?: LayanansScalarFieldEnum | LayanansScalarFieldEnum[]
  }

  /**
   * layanans findFirstOrThrow
   */
  export type layanansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter, which layanans to fetch.
     */
    where?: layanansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of layanans to fetch.
     */
    orderBy?: layanansOrderByWithRelationInput | layanansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for layanans.
     */
    cursor?: layanansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of layanans.
     */
    distinct?: LayanansScalarFieldEnum | LayanansScalarFieldEnum[]
  }

  /**
   * layanans findMany
   */
  export type layanansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter, which layanans to fetch.
     */
    where?: layanansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of layanans to fetch.
     */
    orderBy?: layanansOrderByWithRelationInput | layanansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing layanans.
     */
    cursor?: layanansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` layanans.
     */
    skip?: number
    distinct?: LayanansScalarFieldEnum | LayanansScalarFieldEnum[]
  }

  /**
   * layanans create
   */
  export type layanansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * The data needed to create a layanans.
     */
    data: XOR<layanansCreateInput, layanansUncheckedCreateInput>
  }

  /**
   * layanans createMany
   */
  export type layanansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many layanans.
     */
    data: layanansCreateManyInput | layanansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * layanans update
   */
  export type layanansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * The data needed to update a layanans.
     */
    data: XOR<layanansUpdateInput, layanansUncheckedUpdateInput>
    /**
     * Choose, which layanans to update.
     */
    where: layanansWhereUniqueInput
  }

  /**
   * layanans updateMany
   */
  export type layanansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update layanans.
     */
    data: XOR<layanansUpdateManyMutationInput, layanansUncheckedUpdateManyInput>
    /**
     * Filter which layanans to update
     */
    where?: layanansWhereInput
    /**
     * Limit how many layanans to update.
     */
    limit?: number
  }

  /**
   * layanans upsert
   */
  export type layanansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * The filter to search for the layanans to update in case it exists.
     */
    where: layanansWhereUniqueInput
    /**
     * In case the layanans found by the `where` argument doesn't exist, create a new layanans with this data.
     */
    create: XOR<layanansCreateInput, layanansUncheckedCreateInput>
    /**
     * In case the layanans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<layanansUpdateInput, layanansUncheckedUpdateInput>
  }

  /**
   * layanans delete
   */
  export type layanansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
    /**
     * Filter which layanans to delete.
     */
    where: layanansWhereUniqueInput
  }

  /**
   * layanans deleteMany
   */
  export type layanansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which layanans to delete
     */
    where?: layanansWhereInput
    /**
     * Limit how many layanans to delete.
     */
    limit?: number
  }

  /**
   * layanans without action
   */
  export type layanansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the layanans
     */
    select?: layanansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the layanans
     */
    omit?: layanansOmit<ExtArgs> | null
  }


  /**
   * Model meta_descriptions
   */

  export type AggregateMeta_descriptions = {
    _count: Meta_descriptionsCountAggregateOutputType | null
    _avg: Meta_descriptionsAvgAggregateOutputType | null
    _sum: Meta_descriptionsSumAggregateOutputType | null
    _min: Meta_descriptionsMinAggregateOutputType | null
    _max: Meta_descriptionsMaxAggregateOutputType | null
  }

  export type Meta_descriptionsAvgAggregateOutputType = {
    id: number | null
  }

  export type Meta_descriptionsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Meta_descriptionsMinAggregateOutputType = {
    id: bigint | null
    routename: string | null
    meta_desc: string | null
    meta_title: string | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Meta_descriptionsMaxAggregateOutputType = {
    id: bigint | null
    routename: string | null
    meta_desc: string | null
    meta_title: string | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Meta_descriptionsCountAggregateOutputType = {
    id: number
    routename: number
    meta_desc: number
    meta_title: number
    title: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Meta_descriptionsAvgAggregateInputType = {
    id?: true
  }

  export type Meta_descriptionsSumAggregateInputType = {
    id?: true
  }

  export type Meta_descriptionsMinAggregateInputType = {
    id?: true
    routename?: true
    meta_desc?: true
    meta_title?: true
    title?: true
    created_at?: true
    updated_at?: true
  }

  export type Meta_descriptionsMaxAggregateInputType = {
    id?: true
    routename?: true
    meta_desc?: true
    meta_title?: true
    title?: true
    created_at?: true
    updated_at?: true
  }

  export type Meta_descriptionsCountAggregateInputType = {
    id?: true
    routename?: true
    meta_desc?: true
    meta_title?: true
    title?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Meta_descriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meta_descriptions to aggregate.
     */
    where?: meta_descriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meta_descriptions to fetch.
     */
    orderBy?: meta_descriptionsOrderByWithRelationInput | meta_descriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meta_descriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meta_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meta_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meta_descriptions
    **/
    _count?: true | Meta_descriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meta_descriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meta_descriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meta_descriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meta_descriptionsMaxAggregateInputType
  }

  export type GetMeta_descriptionsAggregateType<T extends Meta_descriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta_descriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta_descriptions[P]>
      : GetScalarType<T[P], AggregateMeta_descriptions[P]>
  }




  export type meta_descriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meta_descriptionsWhereInput
    orderBy?: meta_descriptionsOrderByWithAggregationInput | meta_descriptionsOrderByWithAggregationInput[]
    by: Meta_descriptionsScalarFieldEnum[] | Meta_descriptionsScalarFieldEnum
    having?: meta_descriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meta_descriptionsCountAggregateInputType | true
    _avg?: Meta_descriptionsAvgAggregateInputType
    _sum?: Meta_descriptionsSumAggregateInputType
    _min?: Meta_descriptionsMinAggregateInputType
    _max?: Meta_descriptionsMaxAggregateInputType
  }

  export type Meta_descriptionsGroupByOutputType = {
    id: bigint
    routename: string
    meta_desc: string
    meta_title: string
    title: string
    created_at: Date | null
    updated_at: Date | null
    _count: Meta_descriptionsCountAggregateOutputType | null
    _avg: Meta_descriptionsAvgAggregateOutputType | null
    _sum: Meta_descriptionsSumAggregateOutputType | null
    _min: Meta_descriptionsMinAggregateOutputType | null
    _max: Meta_descriptionsMaxAggregateOutputType | null
  }

  type GetMeta_descriptionsGroupByPayload<T extends meta_descriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meta_descriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meta_descriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meta_descriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], Meta_descriptionsGroupByOutputType[P]>
        }
      >
    >


  export type meta_descriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routename?: boolean
    meta_desc?: boolean
    meta_title?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["meta_descriptions"]>



  export type meta_descriptionsSelectScalar = {
    id?: boolean
    routename?: boolean
    meta_desc?: boolean
    meta_title?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type meta_descriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routename" | "meta_desc" | "meta_title" | "title" | "created_at" | "updated_at", ExtArgs["result"]["meta_descriptions"]>

  export type $meta_descriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meta_descriptions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      routename: string
      meta_desc: string
      meta_title: string
      title: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["meta_descriptions"]>
    composites: {}
  }

  type meta_descriptionsGetPayload<S extends boolean | null | undefined | meta_descriptionsDefaultArgs> = $Result.GetResult<Prisma.$meta_descriptionsPayload, S>

  type meta_descriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meta_descriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Meta_descriptionsCountAggregateInputType | true
    }

  export interface meta_descriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meta_descriptions'], meta: { name: 'meta_descriptions' } }
    /**
     * Find zero or one Meta_descriptions that matches the filter.
     * @param {meta_descriptionsFindUniqueArgs} args - Arguments to find a Meta_descriptions
     * @example
     * // Get one Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meta_descriptionsFindUniqueArgs>(args: SelectSubset<T, meta_descriptionsFindUniqueArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta_descriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meta_descriptionsFindUniqueOrThrowArgs} args - Arguments to find a Meta_descriptions
     * @example
     * // Get one Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meta_descriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, meta_descriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsFindFirstArgs} args - Arguments to find a Meta_descriptions
     * @example
     * // Get one Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meta_descriptionsFindFirstArgs>(args?: SelectSubset<T, meta_descriptionsFindFirstArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta_descriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsFindFirstOrThrowArgs} args - Arguments to find a Meta_descriptions
     * @example
     * // Get one Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meta_descriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, meta_descriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meta_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findMany()
     * 
     * // Get first 10 Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meta_descriptionsWithIdOnly = await prisma.meta_descriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meta_descriptionsFindManyArgs>(args?: SelectSubset<T, meta_descriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta_descriptions.
     * @param {meta_descriptionsCreateArgs} args - Arguments to create a Meta_descriptions.
     * @example
     * // Create one Meta_descriptions
     * const Meta_descriptions = await prisma.meta_descriptions.create({
     *   data: {
     *     // ... data to create a Meta_descriptions
     *   }
     * })
     * 
     */
    create<T extends meta_descriptionsCreateArgs>(args: SelectSubset<T, meta_descriptionsCreateArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meta_descriptions.
     * @param {meta_descriptionsCreateManyArgs} args - Arguments to create many Meta_descriptions.
     * @example
     * // Create many Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meta_descriptionsCreateManyArgs>(args?: SelectSubset<T, meta_descriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meta_descriptions.
     * @param {meta_descriptionsDeleteArgs} args - Arguments to delete one Meta_descriptions.
     * @example
     * // Delete one Meta_descriptions
     * const Meta_descriptions = await prisma.meta_descriptions.delete({
     *   where: {
     *     // ... filter to delete one Meta_descriptions
     *   }
     * })
     * 
     */
    delete<T extends meta_descriptionsDeleteArgs>(args: SelectSubset<T, meta_descriptionsDeleteArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta_descriptions.
     * @param {meta_descriptionsUpdateArgs} args - Arguments to update one Meta_descriptions.
     * @example
     * // Update one Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meta_descriptionsUpdateArgs>(args: SelectSubset<T, meta_descriptionsUpdateArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meta_descriptions.
     * @param {meta_descriptionsDeleteManyArgs} args - Arguments to filter Meta_descriptions to delete.
     * @example
     * // Delete a few Meta_descriptions
     * const { count } = await prisma.meta_descriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meta_descriptionsDeleteManyArgs>(args?: SelectSubset<T, meta_descriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meta_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meta_descriptionsUpdateManyArgs>(args: SelectSubset<T, meta_descriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meta_descriptions.
     * @param {meta_descriptionsUpsertArgs} args - Arguments to update or create a Meta_descriptions.
     * @example
     * // Update or create a Meta_descriptions
     * const meta_descriptions = await prisma.meta_descriptions.upsert({
     *   create: {
     *     // ... data to create a Meta_descriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta_descriptions we want to update
     *   }
     * })
     */
    upsert<T extends meta_descriptionsUpsertArgs>(args: SelectSubset<T, meta_descriptionsUpsertArgs<ExtArgs>>): Prisma__meta_descriptionsClient<$Result.GetResult<Prisma.$meta_descriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meta_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsCountArgs} args - Arguments to filter Meta_descriptions to count.
     * @example
     * // Count the number of Meta_descriptions
     * const count = await prisma.meta_descriptions.count({
     *   where: {
     *     // ... the filter for the Meta_descriptions we want to count
     *   }
     * })
    **/
    count<T extends meta_descriptionsCountArgs>(
      args?: Subset<T, meta_descriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meta_descriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meta_descriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meta_descriptionsAggregateArgs>(args: Subset<T, Meta_descriptionsAggregateArgs>): Prisma.PrismaPromise<GetMeta_descriptionsAggregateType<T>>

    /**
     * Group by Meta_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meta_descriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meta_descriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meta_descriptionsGroupByArgs['orderBy'] }
        : { orderBy?: meta_descriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meta_descriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeta_descriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meta_descriptions model
   */
  readonly fields: meta_descriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meta_descriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meta_descriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meta_descriptions model
   */
  interface meta_descriptionsFieldRefs {
    readonly id: FieldRef<"meta_descriptions", 'BigInt'>
    readonly routename: FieldRef<"meta_descriptions", 'String'>
    readonly meta_desc: FieldRef<"meta_descriptions", 'String'>
    readonly meta_title: FieldRef<"meta_descriptions", 'String'>
    readonly title: FieldRef<"meta_descriptions", 'String'>
    readonly created_at: FieldRef<"meta_descriptions", 'DateTime'>
    readonly updated_at: FieldRef<"meta_descriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meta_descriptions findUnique
   */
  export type meta_descriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter, which meta_descriptions to fetch.
     */
    where: meta_descriptionsWhereUniqueInput
  }

  /**
   * meta_descriptions findUniqueOrThrow
   */
  export type meta_descriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter, which meta_descriptions to fetch.
     */
    where: meta_descriptionsWhereUniqueInput
  }

  /**
   * meta_descriptions findFirst
   */
  export type meta_descriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter, which meta_descriptions to fetch.
     */
    where?: meta_descriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meta_descriptions to fetch.
     */
    orderBy?: meta_descriptionsOrderByWithRelationInput | meta_descriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meta_descriptions.
     */
    cursor?: meta_descriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meta_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meta_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meta_descriptions.
     */
    distinct?: Meta_descriptionsScalarFieldEnum | Meta_descriptionsScalarFieldEnum[]
  }

  /**
   * meta_descriptions findFirstOrThrow
   */
  export type meta_descriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter, which meta_descriptions to fetch.
     */
    where?: meta_descriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meta_descriptions to fetch.
     */
    orderBy?: meta_descriptionsOrderByWithRelationInput | meta_descriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meta_descriptions.
     */
    cursor?: meta_descriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meta_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meta_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meta_descriptions.
     */
    distinct?: Meta_descriptionsScalarFieldEnum | Meta_descriptionsScalarFieldEnum[]
  }

  /**
   * meta_descriptions findMany
   */
  export type meta_descriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter, which meta_descriptions to fetch.
     */
    where?: meta_descriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meta_descriptions to fetch.
     */
    orderBy?: meta_descriptionsOrderByWithRelationInput | meta_descriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meta_descriptions.
     */
    cursor?: meta_descriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meta_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meta_descriptions.
     */
    skip?: number
    distinct?: Meta_descriptionsScalarFieldEnum | Meta_descriptionsScalarFieldEnum[]
  }

  /**
   * meta_descriptions create
   */
  export type meta_descriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * The data needed to create a meta_descriptions.
     */
    data: XOR<meta_descriptionsCreateInput, meta_descriptionsUncheckedCreateInput>
  }

  /**
   * meta_descriptions createMany
   */
  export type meta_descriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meta_descriptions.
     */
    data: meta_descriptionsCreateManyInput | meta_descriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meta_descriptions update
   */
  export type meta_descriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * The data needed to update a meta_descriptions.
     */
    data: XOR<meta_descriptionsUpdateInput, meta_descriptionsUncheckedUpdateInput>
    /**
     * Choose, which meta_descriptions to update.
     */
    where: meta_descriptionsWhereUniqueInput
  }

  /**
   * meta_descriptions updateMany
   */
  export type meta_descriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meta_descriptions.
     */
    data: XOR<meta_descriptionsUpdateManyMutationInput, meta_descriptionsUncheckedUpdateManyInput>
    /**
     * Filter which meta_descriptions to update
     */
    where?: meta_descriptionsWhereInput
    /**
     * Limit how many meta_descriptions to update.
     */
    limit?: number
  }

  /**
   * meta_descriptions upsert
   */
  export type meta_descriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * The filter to search for the meta_descriptions to update in case it exists.
     */
    where: meta_descriptionsWhereUniqueInput
    /**
     * In case the meta_descriptions found by the `where` argument doesn't exist, create a new meta_descriptions with this data.
     */
    create: XOR<meta_descriptionsCreateInput, meta_descriptionsUncheckedCreateInput>
    /**
     * In case the meta_descriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meta_descriptionsUpdateInput, meta_descriptionsUncheckedUpdateInput>
  }

  /**
   * meta_descriptions delete
   */
  export type meta_descriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
    /**
     * Filter which meta_descriptions to delete.
     */
    where: meta_descriptionsWhereUniqueInput
  }

  /**
   * meta_descriptions deleteMany
   */
  export type meta_descriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meta_descriptions to delete
     */
    where?: meta_descriptionsWhereInput
    /**
     * Limit how many meta_descriptions to delete.
     */
    limit?: number
  }

  /**
   * meta_descriptions without action
   */
  export type meta_descriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meta_descriptions
     */
    select?: meta_descriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meta_descriptions
     */
    omit?: meta_descriptionsOmit<ExtArgs> | null
  }


  /**
   * Model mitra_menus
   */

  export type AggregateMitra_menus = {
    _count: Mitra_menusCountAggregateOutputType | null
    _avg: Mitra_menusAvgAggregateOutputType | null
    _sum: Mitra_menusSumAggregateOutputType | null
    _min: Mitra_menusMinAggregateOutputType | null
    _max: Mitra_menusMaxAggregateOutputType | null
  }

  export type Mitra_menusAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type Mitra_menusSumAggregateOutputType = {
    id: bigint | null
    order: number | null
  }

  export type Mitra_menusMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    classname: string | null
    url: string | null
    order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Mitra_menusMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    classname: string | null
    url: string | null
    order: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Mitra_menusCountAggregateOutputType = {
    id: number
    name: number
    classname: number
    url: number
    order: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Mitra_menusAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type Mitra_menusSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type Mitra_menusMinAggregateInputType = {
    id?: true
    name?: true
    classname?: true
    url?: true
    order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Mitra_menusMaxAggregateInputType = {
    id?: true
    name?: true
    classname?: true
    url?: true
    order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Mitra_menusCountAggregateInputType = {
    id?: true
    name?: true
    classname?: true
    url?: true
    order?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Mitra_menusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitra_menus to aggregate.
     */
    where?: mitra_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitra_menus to fetch.
     */
    orderBy?: mitra_menusOrderByWithRelationInput | mitra_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mitra_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitra_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitra_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mitra_menus
    **/
    _count?: true | Mitra_menusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mitra_menusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mitra_menusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mitra_menusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mitra_menusMaxAggregateInputType
  }

  export type GetMitra_menusAggregateType<T extends Mitra_menusAggregateArgs> = {
        [P in keyof T & keyof AggregateMitra_menus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMitra_menus[P]>
      : GetScalarType<T[P], AggregateMitra_menus[P]>
  }




  export type mitra_menusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mitra_menusWhereInput
    orderBy?: mitra_menusOrderByWithAggregationInput | mitra_menusOrderByWithAggregationInput[]
    by: Mitra_menusScalarFieldEnum[] | Mitra_menusScalarFieldEnum
    having?: mitra_menusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mitra_menusCountAggregateInputType | true
    _avg?: Mitra_menusAvgAggregateInputType
    _sum?: Mitra_menusSumAggregateInputType
    _min?: Mitra_menusMinAggregateInputType
    _max?: Mitra_menusMaxAggregateInputType
  }

  export type Mitra_menusGroupByOutputType = {
    id: bigint
    name: string
    classname: string
    url: string
    order: number
    is_active: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: Mitra_menusCountAggregateOutputType | null
    _avg: Mitra_menusAvgAggregateOutputType | null
    _sum: Mitra_menusSumAggregateOutputType | null
    _min: Mitra_menusMinAggregateOutputType | null
    _max: Mitra_menusMaxAggregateOutputType | null
  }

  type GetMitra_menusGroupByPayload<T extends mitra_menusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mitra_menusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mitra_menusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mitra_menusGroupByOutputType[P]>
            : GetScalarType<T[P], Mitra_menusGroupByOutputType[P]>
        }
      >
    >


  export type mitra_menusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classname?: boolean
    url?: boolean
    order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mitra_menus"]>



  export type mitra_menusSelectScalar = {
    id?: boolean
    name?: boolean
    classname?: boolean
    url?: boolean
    order?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type mitra_menusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "classname" | "url" | "order" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["mitra_menus"]>

  export type $mitra_menusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mitra_menus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      classname: string
      url: string
      order: number
      is_active: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["mitra_menus"]>
    composites: {}
  }

  type mitra_menusGetPayload<S extends boolean | null | undefined | mitra_menusDefaultArgs> = $Result.GetResult<Prisma.$mitra_menusPayload, S>

  type mitra_menusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mitra_menusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mitra_menusCountAggregateInputType | true
    }

  export interface mitra_menusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mitra_menus'], meta: { name: 'mitra_menus' } }
    /**
     * Find zero or one Mitra_menus that matches the filter.
     * @param {mitra_menusFindUniqueArgs} args - Arguments to find a Mitra_menus
     * @example
     * // Get one Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mitra_menusFindUniqueArgs>(args: SelectSubset<T, mitra_menusFindUniqueArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mitra_menus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mitra_menusFindUniqueOrThrowArgs} args - Arguments to find a Mitra_menus
     * @example
     * // Get one Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mitra_menusFindUniqueOrThrowArgs>(args: SelectSubset<T, mitra_menusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitra_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusFindFirstArgs} args - Arguments to find a Mitra_menus
     * @example
     * // Get one Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mitra_menusFindFirstArgs>(args?: SelectSubset<T, mitra_menusFindFirstArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitra_menus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusFindFirstOrThrowArgs} args - Arguments to find a Mitra_menus
     * @example
     * // Get one Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mitra_menusFindFirstOrThrowArgs>(args?: SelectSubset<T, mitra_menusFindFirstOrThrowArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mitra_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findMany()
     * 
     * // Get first 10 Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mitra_menusWithIdOnly = await prisma.mitra_menus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mitra_menusFindManyArgs>(args?: SelectSubset<T, mitra_menusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mitra_menus.
     * @param {mitra_menusCreateArgs} args - Arguments to create a Mitra_menus.
     * @example
     * // Create one Mitra_menus
     * const Mitra_menus = await prisma.mitra_menus.create({
     *   data: {
     *     // ... data to create a Mitra_menus
     *   }
     * })
     * 
     */
    create<T extends mitra_menusCreateArgs>(args: SelectSubset<T, mitra_menusCreateArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mitra_menus.
     * @param {mitra_menusCreateManyArgs} args - Arguments to create many Mitra_menus.
     * @example
     * // Create many Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mitra_menusCreateManyArgs>(args?: SelectSubset<T, mitra_menusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mitra_menus.
     * @param {mitra_menusDeleteArgs} args - Arguments to delete one Mitra_menus.
     * @example
     * // Delete one Mitra_menus
     * const Mitra_menus = await prisma.mitra_menus.delete({
     *   where: {
     *     // ... filter to delete one Mitra_menus
     *   }
     * })
     * 
     */
    delete<T extends mitra_menusDeleteArgs>(args: SelectSubset<T, mitra_menusDeleteArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mitra_menus.
     * @param {mitra_menusUpdateArgs} args - Arguments to update one Mitra_menus.
     * @example
     * // Update one Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mitra_menusUpdateArgs>(args: SelectSubset<T, mitra_menusUpdateArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mitra_menus.
     * @param {mitra_menusDeleteManyArgs} args - Arguments to filter Mitra_menus to delete.
     * @example
     * // Delete a few Mitra_menus
     * const { count } = await prisma.mitra_menus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mitra_menusDeleteManyArgs>(args?: SelectSubset<T, mitra_menusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitra_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mitra_menusUpdateManyArgs>(args: SelectSubset<T, mitra_menusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mitra_menus.
     * @param {mitra_menusUpsertArgs} args - Arguments to update or create a Mitra_menus.
     * @example
     * // Update or create a Mitra_menus
     * const mitra_menus = await prisma.mitra_menus.upsert({
     *   create: {
     *     // ... data to create a Mitra_menus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mitra_menus we want to update
     *   }
     * })
     */
    upsert<T extends mitra_menusUpsertArgs>(args: SelectSubset<T, mitra_menusUpsertArgs<ExtArgs>>): Prisma__mitra_menusClient<$Result.GetResult<Prisma.$mitra_menusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mitra_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusCountArgs} args - Arguments to filter Mitra_menus to count.
     * @example
     * // Count the number of Mitra_menus
     * const count = await prisma.mitra_menus.count({
     *   where: {
     *     // ... the filter for the Mitra_menus we want to count
     *   }
     * })
    **/
    count<T extends mitra_menusCountArgs>(
      args?: Subset<T, mitra_menusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mitra_menusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mitra_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mitra_menusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mitra_menusAggregateArgs>(args: Subset<T, Mitra_menusAggregateArgs>): Prisma.PrismaPromise<GetMitra_menusAggregateType<T>>

    /**
     * Group by Mitra_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mitra_menusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mitra_menusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mitra_menusGroupByArgs['orderBy'] }
        : { orderBy?: mitra_menusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mitra_menusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMitra_menusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mitra_menus model
   */
  readonly fields: mitra_menusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mitra_menus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mitra_menusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mitra_menus model
   */
  interface mitra_menusFieldRefs {
    readonly id: FieldRef<"mitra_menus", 'BigInt'>
    readonly name: FieldRef<"mitra_menus", 'String'>
    readonly classname: FieldRef<"mitra_menus", 'String'>
    readonly url: FieldRef<"mitra_menus", 'String'>
    readonly order: FieldRef<"mitra_menus", 'Int'>
    readonly is_active: FieldRef<"mitra_menus", 'Boolean'>
    readonly created_at: FieldRef<"mitra_menus", 'DateTime'>
    readonly updated_at: FieldRef<"mitra_menus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mitra_menus findUnique
   */
  export type mitra_menusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter, which mitra_menus to fetch.
     */
    where: mitra_menusWhereUniqueInput
  }

  /**
   * mitra_menus findUniqueOrThrow
   */
  export type mitra_menusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter, which mitra_menus to fetch.
     */
    where: mitra_menusWhereUniqueInput
  }

  /**
   * mitra_menus findFirst
   */
  export type mitra_menusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter, which mitra_menus to fetch.
     */
    where?: mitra_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitra_menus to fetch.
     */
    orderBy?: mitra_menusOrderByWithRelationInput | mitra_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitra_menus.
     */
    cursor?: mitra_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitra_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitra_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitra_menus.
     */
    distinct?: Mitra_menusScalarFieldEnum | Mitra_menusScalarFieldEnum[]
  }

  /**
   * mitra_menus findFirstOrThrow
   */
  export type mitra_menusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter, which mitra_menus to fetch.
     */
    where?: mitra_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitra_menus to fetch.
     */
    orderBy?: mitra_menusOrderByWithRelationInput | mitra_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mitra_menus.
     */
    cursor?: mitra_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitra_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitra_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mitra_menus.
     */
    distinct?: Mitra_menusScalarFieldEnum | Mitra_menusScalarFieldEnum[]
  }

  /**
   * mitra_menus findMany
   */
  export type mitra_menusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter, which mitra_menus to fetch.
     */
    where?: mitra_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mitra_menus to fetch.
     */
    orderBy?: mitra_menusOrderByWithRelationInput | mitra_menusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mitra_menus.
     */
    cursor?: mitra_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mitra_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mitra_menus.
     */
    skip?: number
    distinct?: Mitra_menusScalarFieldEnum | Mitra_menusScalarFieldEnum[]
  }

  /**
   * mitra_menus create
   */
  export type mitra_menusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * The data needed to create a mitra_menus.
     */
    data: XOR<mitra_menusCreateInput, mitra_menusUncheckedCreateInput>
  }

  /**
   * mitra_menus createMany
   */
  export type mitra_menusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mitra_menus.
     */
    data: mitra_menusCreateManyInput | mitra_menusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mitra_menus update
   */
  export type mitra_menusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * The data needed to update a mitra_menus.
     */
    data: XOR<mitra_menusUpdateInput, mitra_menusUncheckedUpdateInput>
    /**
     * Choose, which mitra_menus to update.
     */
    where: mitra_menusWhereUniqueInput
  }

  /**
   * mitra_menus updateMany
   */
  export type mitra_menusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mitra_menus.
     */
    data: XOR<mitra_menusUpdateManyMutationInput, mitra_menusUncheckedUpdateManyInput>
    /**
     * Filter which mitra_menus to update
     */
    where?: mitra_menusWhereInput
    /**
     * Limit how many mitra_menus to update.
     */
    limit?: number
  }

  /**
   * mitra_menus upsert
   */
  export type mitra_menusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * The filter to search for the mitra_menus to update in case it exists.
     */
    where: mitra_menusWhereUniqueInput
    /**
     * In case the mitra_menus found by the `where` argument doesn't exist, create a new mitra_menus with this data.
     */
    create: XOR<mitra_menusCreateInput, mitra_menusUncheckedCreateInput>
    /**
     * In case the mitra_menus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mitra_menusUpdateInput, mitra_menusUncheckedUpdateInput>
  }

  /**
   * mitra_menus delete
   */
  export type mitra_menusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
    /**
     * Filter which mitra_menus to delete.
     */
    where: mitra_menusWhereUniqueInput
  }

  /**
   * mitra_menus deleteMany
   */
  export type mitra_menusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mitra_menus to delete
     */
    where?: mitra_menusWhereInput
    /**
     * Limit how many mitra_menus to delete.
     */
    limit?: number
  }

  /**
   * mitra_menus without action
   */
  export type mitra_menusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mitra_menus
     */
    select?: mitra_menusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mitra_menus
     */
    omit?: mitra_menusOmit<ExtArgs> | null
  }


  /**
   * Model partners
   */

  export type AggregatePartners = {
    _count: PartnersCountAggregateOutputType | null
    _avg: PartnersAvgAggregateOutputType | null
    _sum: PartnersSumAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  export type PartnersAvgAggregateOutputType = {
    id: number | null
  }

  export type PartnersSumAggregateOutputType = {
    id: bigint | null
  }

  export type PartnersMinAggregateOutputType = {
    id: bigint | null
    path: string | null
    alt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PartnersMaxAggregateOutputType = {
    id: bigint | null
    path: string | null
    alt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PartnersCountAggregateOutputType = {
    id: number
    path: number
    alt: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PartnersAvgAggregateInputType = {
    id?: true
  }

  export type PartnersSumAggregateInputType = {
    id?: true
  }

  export type PartnersMinAggregateInputType = {
    id?: true
    path?: true
    alt?: true
    created_at?: true
    updated_at?: true
  }

  export type PartnersMaxAggregateInputType = {
    id?: true
    path?: true
    alt?: true
    created_at?: true
    updated_at?: true
  }

  export type PartnersCountAggregateInputType = {
    id?: true
    path?: true
    alt?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PartnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partners to aggregate.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned partners
    **/
    _count?: true | PartnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnersMaxAggregateInputType
  }

  export type GetPartnersAggregateType<T extends PartnersAggregateArgs> = {
        [P in keyof T & keyof AggregatePartners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartners[P]>
      : GetScalarType<T[P], AggregatePartners[P]>
  }




  export type partnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: partnersWhereInput
    orderBy?: partnersOrderByWithAggregationInput | partnersOrderByWithAggregationInput[]
    by: PartnersScalarFieldEnum[] | PartnersScalarFieldEnum
    having?: partnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnersCountAggregateInputType | true
    _avg?: PartnersAvgAggregateInputType
    _sum?: PartnersSumAggregateInputType
    _min?: PartnersMinAggregateInputType
    _max?: PartnersMaxAggregateInputType
  }

  export type PartnersGroupByOutputType = {
    id: bigint
    path: string
    alt: string
    created_at: Date | null
    updated_at: Date | null
    _count: PartnersCountAggregateOutputType | null
    _avg: PartnersAvgAggregateOutputType | null
    _sum: PartnersSumAggregateOutputType | null
    _min: PartnersMinAggregateOutputType | null
    _max: PartnersMaxAggregateOutputType | null
  }

  type GetPartnersGroupByPayload<T extends partnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnersGroupByOutputType[P]>
            : GetScalarType<T[P], PartnersGroupByOutputType[P]>
        }
      >
    >


  export type partnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["partners"]>



  export type partnersSelectScalar = {
    id?: boolean
    path?: boolean
    alt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type partnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "alt" | "created_at" | "updated_at", ExtArgs["result"]["partners"]>

  export type $partnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "partners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      path: string
      alt: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["partners"]>
    composites: {}
  }

  type partnersGetPayload<S extends boolean | null | undefined | partnersDefaultArgs> = $Result.GetResult<Prisma.$partnersPayload, S>

  type partnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<partnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnersCountAggregateInputType | true
    }

  export interface partnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['partners'], meta: { name: 'partners' } }
    /**
     * Find zero or one Partners that matches the filter.
     * @param {partnersFindUniqueArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends partnersFindUniqueArgs>(args: SelectSubset<T, partnersFindUniqueArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {partnersFindUniqueOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends partnersFindUniqueOrThrowArgs>(args: SelectSubset<T, partnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindFirstArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends partnersFindFirstArgs>(args?: SelectSubset<T, partnersFindFirstArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindFirstOrThrowArgs} args - Arguments to find a Partners
     * @example
     * // Get one Partners
     * const partners = await prisma.partners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends partnersFindFirstOrThrowArgs>(args?: SelectSubset<T, partnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partners.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnersWithIdOnly = await prisma.partners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends partnersFindManyArgs>(args?: SelectSubset<T, partnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partners.
     * @param {partnersCreateArgs} args - Arguments to create a Partners.
     * @example
     * // Create one Partners
     * const Partners = await prisma.partners.create({
     *   data: {
     *     // ... data to create a Partners
     *   }
     * })
     * 
     */
    create<T extends partnersCreateArgs>(args: SelectSubset<T, partnersCreateArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {partnersCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partners = await prisma.partners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends partnersCreateManyArgs>(args?: SelectSubset<T, partnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partners.
     * @param {partnersDeleteArgs} args - Arguments to delete one Partners.
     * @example
     * // Delete one Partners
     * const Partners = await prisma.partners.delete({
     *   where: {
     *     // ... filter to delete one Partners
     *   }
     * })
     * 
     */
    delete<T extends partnersDeleteArgs>(args: SelectSubset<T, partnersDeleteArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partners.
     * @param {partnersUpdateArgs} args - Arguments to update one Partners.
     * @example
     * // Update one Partners
     * const partners = await prisma.partners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends partnersUpdateArgs>(args: SelectSubset<T, partnersUpdateArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {partnersDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends partnersDeleteManyArgs>(args?: SelectSubset<T, partnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partners = await prisma.partners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends partnersUpdateManyArgs>(args: SelectSubset<T, partnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partners.
     * @param {partnersUpsertArgs} args - Arguments to update or create a Partners.
     * @example
     * // Update or create a Partners
     * const partners = await prisma.partners.upsert({
     *   create: {
     *     // ... data to create a Partners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partners we want to update
     *   }
     * })
     */
    upsert<T extends partnersUpsertArgs>(args: SelectSubset<T, partnersUpsertArgs<ExtArgs>>): Prisma__partnersClient<$Result.GetResult<Prisma.$partnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partners.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends partnersCountArgs>(
      args?: Subset<T, partnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnersAggregateArgs>(args: Subset<T, PartnersAggregateArgs>): Prisma.PrismaPromise<GetPartnersAggregateType<T>>

    /**
     * Group by Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends partnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: partnersGroupByArgs['orderBy'] }
        : { orderBy?: partnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, partnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the partners model
   */
  readonly fields: partnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for partners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__partnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the partners model
   */
  interface partnersFieldRefs {
    readonly id: FieldRef<"partners", 'BigInt'>
    readonly path: FieldRef<"partners", 'String'>
    readonly alt: FieldRef<"partners", 'String'>
    readonly created_at: FieldRef<"partners", 'DateTime'>
    readonly updated_at: FieldRef<"partners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * partners findUnique
   */
  export type partnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where: partnersWhereUniqueInput
  }

  /**
   * partners findUniqueOrThrow
   */
  export type partnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where: partnersWhereUniqueInput
  }

  /**
   * partners findFirst
   */
  export type partnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * partners findFirstOrThrow
   */
  export type partnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partners.
     */
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * partners findMany
   */
  export type partnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter, which partners to fetch.
     */
    where?: partnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partners to fetch.
     */
    orderBy?: partnersOrderByWithRelationInput | partnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing partners.
     */
    cursor?: partnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partners.
     */
    skip?: number
    distinct?: PartnersScalarFieldEnum | PartnersScalarFieldEnum[]
  }

  /**
   * partners create
   */
  export type partnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * The data needed to create a partners.
     */
    data: XOR<partnersCreateInput, partnersUncheckedCreateInput>
  }

  /**
   * partners createMany
   */
  export type partnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many partners.
     */
    data: partnersCreateManyInput | partnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * partners update
   */
  export type partnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * The data needed to update a partners.
     */
    data: XOR<partnersUpdateInput, partnersUncheckedUpdateInput>
    /**
     * Choose, which partners to update.
     */
    where: partnersWhereUniqueInput
  }

  /**
   * partners updateMany
   */
  export type partnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update partners.
     */
    data: XOR<partnersUpdateManyMutationInput, partnersUncheckedUpdateManyInput>
    /**
     * Filter which partners to update
     */
    where?: partnersWhereInput
    /**
     * Limit how many partners to update.
     */
    limit?: number
  }

  /**
   * partners upsert
   */
  export type partnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * The filter to search for the partners to update in case it exists.
     */
    where: partnersWhereUniqueInput
    /**
     * In case the partners found by the `where` argument doesn't exist, create a new partners with this data.
     */
    create: XOR<partnersCreateInput, partnersUncheckedCreateInput>
    /**
     * In case the partners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<partnersUpdateInput, partnersUncheckedUpdateInput>
  }

  /**
   * partners delete
   */
  export type partnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
    /**
     * Filter which partners to delete.
     */
    where: partnersWhereUniqueInput
  }

  /**
   * partners deleteMany
   */
  export type partnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partners to delete
     */
    where?: partnersWhereInput
    /**
     * Limit how many partners to delete.
     */
    limit?: number
  }

  /**
   * partners without action
   */
  export type partnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partners
     */
    select?: partnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partners
     */
    omit?: partnersOmit<ExtArgs> | null
  }


  /**
   * Model produks
   */

  export type AggregateProduks = {
    _count: ProduksCountAggregateOutputType | null
    _avg: ProduksAvgAggregateOutputType | null
    _sum: ProduksSumAggregateOutputType | null
    _min: ProduksMinAggregateOutputType | null
    _max: ProduksMaxAggregateOutputType | null
  }

  export type ProduksAvgAggregateOutputType = {
    id: number | null
  }

  export type ProduksSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProduksMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    image: string | null
    alt: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProduksMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    image: string | null
    alt: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProduksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    alt: number
    slug: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProduksAvgAggregateInputType = {
    id?: true
  }

  export type ProduksSumAggregateInputType = {
    id?: true
  }

  export type ProduksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    alt?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type ProduksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    alt?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type ProduksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    alt?: true
    slug?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProduksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to aggregate.
     */
    where?: produksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produksOrderByWithRelationInput | produksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProduksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduksMaxAggregateInputType
  }

  export type GetProduksAggregateType<T extends ProduksAggregateArgs> = {
        [P in keyof T & keyof AggregateProduks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduks[P]>
      : GetScalarType<T[P], AggregateProduks[P]>
  }




  export type produksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produksWhereInput
    orderBy?: produksOrderByWithAggregationInput | produksOrderByWithAggregationInput[]
    by: ProduksScalarFieldEnum[] | ProduksScalarFieldEnum
    having?: produksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduksCountAggregateInputType | true
    _avg?: ProduksAvgAggregateInputType
    _sum?: ProduksSumAggregateInputType
    _min?: ProduksMinAggregateInputType
    _max?: ProduksMaxAggregateInputType
  }

  export type ProduksGroupByOutputType = {
    id: bigint
    title: string
    description: string
    image: string
    alt: string
    slug: string
    created_at: Date | null
    updated_at: Date | null
    _count: ProduksCountAggregateOutputType | null
    _avg: ProduksAvgAggregateOutputType | null
    _sum: ProduksSumAggregateOutputType | null
    _min: ProduksMinAggregateOutputType | null
    _max: ProduksMaxAggregateOutputType | null
  }

  type GetProduksGroupByPayload<T extends produksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduksGroupByOutputType[P]>
            : GetScalarType<T[P], ProduksGroupByOutputType[P]>
        }
      >
    >


  export type produksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    alt?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["produks"]>



  export type produksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    alt?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type produksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "alt" | "slug" | "created_at" | "updated_at", ExtArgs["result"]["produks"]>

  export type $produksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      description: string
      image: string
      alt: string
      slug: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["produks"]>
    composites: {}
  }

  type produksGetPayload<S extends boolean | null | undefined | produksDefaultArgs> = $Result.GetResult<Prisma.$produksPayload, S>

  type produksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduksCountAggregateInputType | true
    }

  export interface produksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produks'], meta: { name: 'produks' } }
    /**
     * Find zero or one Produks that matches the filter.
     * @param {produksFindUniqueArgs} args - Arguments to find a Produks
     * @example
     * // Get one Produks
     * const produks = await prisma.produks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produksFindUniqueArgs>(args: SelectSubset<T, produksFindUniqueArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produksFindUniqueOrThrowArgs} args - Arguments to find a Produks
     * @example
     * // Get one Produks
     * const produks = await prisma.produks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produksFindUniqueOrThrowArgs>(args: SelectSubset<T, produksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksFindFirstArgs} args - Arguments to find a Produks
     * @example
     * // Get one Produks
     * const produks = await prisma.produks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produksFindFirstArgs>(args?: SelectSubset<T, produksFindFirstArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksFindFirstOrThrowArgs} args - Arguments to find a Produks
     * @example
     * // Get one Produks
     * const produks = await prisma.produks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produksFindFirstOrThrowArgs>(args?: SelectSubset<T, produksFindFirstOrThrowArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produks.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produksWithIdOnly = await prisma.produks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produksFindManyArgs>(args?: SelectSubset<T, produksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produks.
     * @param {produksCreateArgs} args - Arguments to create a Produks.
     * @example
     * // Create one Produks
     * const Produks = await prisma.produks.create({
     *   data: {
     *     // ... data to create a Produks
     *   }
     * })
     * 
     */
    create<T extends produksCreateArgs>(args: SelectSubset<T, produksCreateArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produksCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produks = await prisma.produks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produksCreateManyArgs>(args?: SelectSubset<T, produksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produks.
     * @param {produksDeleteArgs} args - Arguments to delete one Produks.
     * @example
     * // Delete one Produks
     * const Produks = await prisma.produks.delete({
     *   where: {
     *     // ... filter to delete one Produks
     *   }
     * })
     * 
     */
    delete<T extends produksDeleteArgs>(args: SelectSubset<T, produksDeleteArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produks.
     * @param {produksUpdateArgs} args - Arguments to update one Produks.
     * @example
     * // Update one Produks
     * const produks = await prisma.produks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produksUpdateArgs>(args: SelectSubset<T, produksUpdateArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produksDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produksDeleteManyArgs>(args?: SelectSubset<T, produksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produks = await prisma.produks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produksUpdateManyArgs>(args: SelectSubset<T, produksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produks.
     * @param {produksUpsertArgs} args - Arguments to update or create a Produks.
     * @example
     * // Update or create a Produks
     * const produks = await prisma.produks.upsert({
     *   create: {
     *     // ... data to create a Produks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produks we want to update
     *   }
     * })
     */
    upsert<T extends produksUpsertArgs>(args: SelectSubset<T, produksUpsertArgs<ExtArgs>>): Prisma__produksClient<$Result.GetResult<Prisma.$produksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produks.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produksCountArgs>(
      args?: Subset<T, produksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduksAggregateArgs>(args: Subset<T, ProduksAggregateArgs>): Prisma.PrismaPromise<GetProduksAggregateType<T>>

    /**
     * Group by Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produksGroupByArgs['orderBy'] }
        : { orderBy?: produksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produks model
   */
  readonly fields: produksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produks model
   */
  interface produksFieldRefs {
    readonly id: FieldRef<"produks", 'BigInt'>
    readonly title: FieldRef<"produks", 'String'>
    readonly description: FieldRef<"produks", 'String'>
    readonly image: FieldRef<"produks", 'String'>
    readonly alt: FieldRef<"produks", 'String'>
    readonly slug: FieldRef<"produks", 'String'>
    readonly created_at: FieldRef<"produks", 'DateTime'>
    readonly updated_at: FieldRef<"produks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * produks findUnique
   */
  export type produksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where: produksWhereUniqueInput
  }

  /**
   * produks findUniqueOrThrow
   */
  export type produksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where: produksWhereUniqueInput
  }

  /**
   * produks findFirst
   */
  export type produksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produksOrderByWithRelationInput | produksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProduksScalarFieldEnum | ProduksScalarFieldEnum[]
  }

  /**
   * produks findFirstOrThrow
   */
  export type produksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produksOrderByWithRelationInput | produksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProduksScalarFieldEnum | ProduksScalarFieldEnum[]
  }

  /**
   * produks findMany
   */
  export type produksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produksOrderByWithRelationInput | produksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProduksScalarFieldEnum | ProduksScalarFieldEnum[]
  }

  /**
   * produks create
   */
  export type produksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * The data needed to create a produks.
     */
    data: XOR<produksCreateInput, produksUncheckedCreateInput>
  }

  /**
   * produks createMany
   */
  export type produksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produksCreateManyInput | produksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produks update
   */
  export type produksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * The data needed to update a produks.
     */
    data: XOR<produksUpdateInput, produksUncheckedUpdateInput>
    /**
     * Choose, which produks to update.
     */
    where: produksWhereUniqueInput
  }

  /**
   * produks updateMany
   */
  export type produksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produksUpdateManyMutationInput, produksUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produksWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produks upsert
   */
  export type produksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * The filter to search for the produks to update in case it exists.
     */
    where: produksWhereUniqueInput
    /**
     * In case the produks found by the `where` argument doesn't exist, create a new produks with this data.
     */
    create: XOR<produksCreateInput, produksUncheckedCreateInput>
    /**
     * In case the produks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produksUpdateInput, produksUncheckedUpdateInput>
  }

  /**
   * produks delete
   */
  export type produksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
    /**
     * Filter which produks to delete.
     */
    where: produksWhereUniqueInput
  }

  /**
   * produks deleteMany
   */
  export type produksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produksWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produks without action
   */
  export type produksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produks
     */
    select?: produksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produks
     */
    omit?: produksOmit<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    user_id: number | null
    last_activity: number | null
  }

  export type SessionsSumAggregateOutputType = {
    user_id: bigint | null
    last_activity: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string | null
    last_activity: number | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    ip_address: number
    user_agent: number
    payload: number
    last_activity: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    user_id?: true
    last_activity?: true
  }

  export type SessionsSumAggregateInputType = {
    user_id?: true
    last_activity?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    ip_address?: true
    user_agent?: true
    payload?: true
    last_activity?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    user_id: bigint | null
    ip_address: string | null
    user_agent: string | null
    payload: string
    last_activity: number
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }, ExtArgs["result"]["sessions"]>



  export type sessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    ip_address?: boolean
    user_agent?: boolean
    payload?: boolean
    last_activity?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "ip_address" | "user_agent" | "payload" | "last_activity", ExtArgs["result"]["sessions"]>

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: bigint | null
      ip_address: string | null
      user_agent: string | null
      payload: string
      last_activity: number
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'String'>
    readonly user_id: FieldRef<"sessions", 'BigInt'>
    readonly ip_address: FieldRef<"sessions", 'String'>
    readonly user_agent: FieldRef<"sessions", 'String'>
    readonly payload: FieldRef<"sessions", 'String'>
    readonly last_activity: FieldRef<"sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: bigint | null
  }

  export type TagsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: bigint
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    article_tag?: boolean | tags$article_tagArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>



  export type tagsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tag?: boolean | tags$article_tagArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      article_tag: Prisma.$article_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_tag<T extends tags$article_tagArgs<ExtArgs> = {}>(args?: Subset<T, tags$article_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'BigInt'>
    readonly name: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
    readonly updated_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.article_tag
   */
  export type tags$article_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tag
     */
    select?: article_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tag
     */
    omit?: article_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagInclude<ExtArgs> | null
    where?: article_tagWhereInput
    orderBy?: article_tagOrderByWithRelationInput | article_tagOrderByWithRelationInput[]
    cursor?: article_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_tagScalarFieldEnum | Article_tagScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model users_google
   */

  export type AggregateUsers_google = {
    _count: Users_googleCountAggregateOutputType | null
    _avg: Users_googleAvgAggregateOutputType | null
    _sum: Users_googleSumAggregateOutputType | null
    _min: Users_googleMinAggregateOutputType | null
    _max: Users_googleMaxAggregateOutputType | null
  }

  export type Users_googleAvgAggregateOutputType = {
    id: number | null
    refresh_token_expires_in: number | null
    expiry_date: number | null
  }

  export type Users_googleSumAggregateOutputType = {
    id: number | null
    refresh_token_expires_in: bigint | null
    expiry_date: bigint | null
  }

  export type Users_googleMinAggregateOutputType = {
    id: number | null
    name: string | null
    access_token: string | null
    refresh_token: string | null
    scope: string | null
    token_type: string | null
    refresh_token_expires_in: bigint | null
    expiry_date: bigint | null
  }

  export type Users_googleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    access_token: string | null
    refresh_token: string | null
    scope: string | null
    token_type: string | null
    refresh_token_expires_in: bigint | null
    expiry_date: bigint | null
  }

  export type Users_googleCountAggregateOutputType = {
    id: number
    name: number
    access_token: number
    refresh_token: number
    scope: number
    token_type: number
    refresh_token_expires_in: number
    expiry_date: number
    _all: number
  }


  export type Users_googleAvgAggregateInputType = {
    id?: true
    refresh_token_expires_in?: true
    expiry_date?: true
  }

  export type Users_googleSumAggregateInputType = {
    id?: true
    refresh_token_expires_in?: true
    expiry_date?: true
  }

  export type Users_googleMinAggregateInputType = {
    id?: true
    name?: true
    access_token?: true
    refresh_token?: true
    scope?: true
    token_type?: true
    refresh_token_expires_in?: true
    expiry_date?: true
  }

  export type Users_googleMaxAggregateInputType = {
    id?: true
    name?: true
    access_token?: true
    refresh_token?: true
    scope?: true
    token_type?: true
    refresh_token_expires_in?: true
    expiry_date?: true
  }

  export type Users_googleCountAggregateInputType = {
    id?: true
    name?: true
    access_token?: true
    refresh_token?: true
    scope?: true
    token_type?: true
    refresh_token_expires_in?: true
    expiry_date?: true
    _all?: true
  }

  export type Users_googleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_google to aggregate.
     */
    where?: users_googleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_googles to fetch.
     */
    orderBy?: users_googleOrderByWithRelationInput | users_googleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_googleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_googles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_googles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_googles
    **/
    _count?: true | Users_googleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_googleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_googleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_googleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_googleMaxAggregateInputType
  }

  export type GetUsers_googleAggregateType<T extends Users_googleAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_google]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_google[P]>
      : GetScalarType<T[P], AggregateUsers_google[P]>
  }




  export type users_googleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_googleWhereInput
    orderBy?: users_googleOrderByWithAggregationInput | users_googleOrderByWithAggregationInput[]
    by: Users_googleScalarFieldEnum[] | Users_googleScalarFieldEnum
    having?: users_googleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_googleCountAggregateInputType | true
    _avg?: Users_googleAvgAggregateInputType
    _sum?: Users_googleSumAggregateInputType
    _min?: Users_googleMinAggregateInputType
    _max?: Users_googleMaxAggregateInputType
  }

  export type Users_googleGroupByOutputType = {
    id: number
    name: string
    access_token: string | null
    refresh_token: string | null
    scope: string
    token_type: string
    refresh_token_expires_in: bigint | null
    expiry_date: bigint | null
    _count: Users_googleCountAggregateOutputType | null
    _avg: Users_googleAvgAggregateOutputType | null
    _sum: Users_googleSumAggregateOutputType | null
    _min: Users_googleMinAggregateOutputType | null
    _max: Users_googleMaxAggregateOutputType | null
  }

  type GetUsers_googleGroupByPayload<T extends users_googleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_googleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_googleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_googleGroupByOutputType[P]>
            : GetScalarType<T[P], Users_googleGroupByOutputType[P]>
        }
      >
    >


  export type users_googleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    scope?: boolean
    token_type?: boolean
    refresh_token_expires_in?: boolean
    expiry_date?: boolean
  }, ExtArgs["result"]["users_google"]>



  export type users_googleSelectScalar = {
    id?: boolean
    name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    scope?: boolean
    token_type?: boolean
    refresh_token_expires_in?: boolean
    expiry_date?: boolean
  }

  export type users_googleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "access_token" | "refresh_token" | "scope" | "token_type" | "refresh_token_expires_in" | "expiry_date", ExtArgs["result"]["users_google"]>

  export type $users_googlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_google"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      access_token: string | null
      refresh_token: string | null
      scope: string
      token_type: string
      refresh_token_expires_in: bigint | null
      expiry_date: bigint | null
    }, ExtArgs["result"]["users_google"]>
    composites: {}
  }

  type users_googleGetPayload<S extends boolean | null | undefined | users_googleDefaultArgs> = $Result.GetResult<Prisma.$users_googlePayload, S>

  type users_googleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_googleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_googleCountAggregateInputType | true
    }

  export interface users_googleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_google'], meta: { name: 'users_google' } }
    /**
     * Find zero or one Users_google that matches the filter.
     * @param {users_googleFindUniqueArgs} args - Arguments to find a Users_google
     * @example
     * // Get one Users_google
     * const users_google = await prisma.users_google.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_googleFindUniqueArgs>(args: SelectSubset<T, users_googleFindUniqueArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_google that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_googleFindUniqueOrThrowArgs} args - Arguments to find a Users_google
     * @example
     * // Get one Users_google
     * const users_google = await prisma.users_google.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_googleFindUniqueOrThrowArgs>(args: SelectSubset<T, users_googleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_google that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleFindFirstArgs} args - Arguments to find a Users_google
     * @example
     * // Get one Users_google
     * const users_google = await prisma.users_google.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_googleFindFirstArgs>(args?: SelectSubset<T, users_googleFindFirstArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_google that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleFindFirstOrThrowArgs} args - Arguments to find a Users_google
     * @example
     * // Get one Users_google
     * const users_google = await prisma.users_google.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_googleFindFirstOrThrowArgs>(args?: SelectSubset<T, users_googleFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_googles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_googles
     * const users_googles = await prisma.users_google.findMany()
     * 
     * // Get first 10 Users_googles
     * const users_googles = await prisma.users_google.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const users_googleWithIdOnly = await prisma.users_google.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends users_googleFindManyArgs>(args?: SelectSubset<T, users_googleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_google.
     * @param {users_googleCreateArgs} args - Arguments to create a Users_google.
     * @example
     * // Create one Users_google
     * const Users_google = await prisma.users_google.create({
     *   data: {
     *     // ... data to create a Users_google
     *   }
     * })
     * 
     */
    create<T extends users_googleCreateArgs>(args: SelectSubset<T, users_googleCreateArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_googles.
     * @param {users_googleCreateManyArgs} args - Arguments to create many Users_googles.
     * @example
     * // Create many Users_googles
     * const users_google = await prisma.users_google.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_googleCreateManyArgs>(args?: SelectSubset<T, users_googleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_google.
     * @param {users_googleDeleteArgs} args - Arguments to delete one Users_google.
     * @example
     * // Delete one Users_google
     * const Users_google = await prisma.users_google.delete({
     *   where: {
     *     // ... filter to delete one Users_google
     *   }
     * })
     * 
     */
    delete<T extends users_googleDeleteArgs>(args: SelectSubset<T, users_googleDeleteArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_google.
     * @param {users_googleUpdateArgs} args - Arguments to update one Users_google.
     * @example
     * // Update one Users_google
     * const users_google = await prisma.users_google.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_googleUpdateArgs>(args: SelectSubset<T, users_googleUpdateArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_googles.
     * @param {users_googleDeleteManyArgs} args - Arguments to filter Users_googles to delete.
     * @example
     * // Delete a few Users_googles
     * const { count } = await prisma.users_google.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_googleDeleteManyArgs>(args?: SelectSubset<T, users_googleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_googles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_googles
     * const users_google = await prisma.users_google.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_googleUpdateManyArgs>(args: SelectSubset<T, users_googleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_google.
     * @param {users_googleUpsertArgs} args - Arguments to update or create a Users_google.
     * @example
     * // Update or create a Users_google
     * const users_google = await prisma.users_google.upsert({
     *   create: {
     *     // ... data to create a Users_google
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_google we want to update
     *   }
     * })
     */
    upsert<T extends users_googleUpsertArgs>(args: SelectSubset<T, users_googleUpsertArgs<ExtArgs>>): Prisma__users_googleClient<$Result.GetResult<Prisma.$users_googlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_googles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleCountArgs} args - Arguments to filter Users_googles to count.
     * @example
     * // Count the number of Users_googles
     * const count = await prisma.users_google.count({
     *   where: {
     *     // ... the filter for the Users_googles we want to count
     *   }
     * })
    **/
    count<T extends users_googleCountArgs>(
      args?: Subset<T, users_googleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_googleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_google.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_googleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_googleAggregateArgs>(args: Subset<T, Users_googleAggregateArgs>): Prisma.PrismaPromise<GetUsers_googleAggregateType<T>>

    /**
     * Group by Users_google.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_googleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends users_googleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_googleGroupByArgs['orderBy'] }
        : { orderBy?: users_googleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, users_googleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_googleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_google model
   */
  readonly fields: users_googleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_google.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_googleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users_google model
   */
  interface users_googleFieldRefs {
    readonly id: FieldRef<"users_google", 'Int'>
    readonly name: FieldRef<"users_google", 'String'>
    readonly access_token: FieldRef<"users_google", 'String'>
    readonly refresh_token: FieldRef<"users_google", 'String'>
    readonly scope: FieldRef<"users_google", 'String'>
    readonly token_type: FieldRef<"users_google", 'String'>
    readonly refresh_token_expires_in: FieldRef<"users_google", 'BigInt'>
    readonly expiry_date: FieldRef<"users_google", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * users_google findUnique
   */
  export type users_googleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter, which users_google to fetch.
     */
    where: users_googleWhereUniqueInput
  }

  /**
   * users_google findUniqueOrThrow
   */
  export type users_googleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter, which users_google to fetch.
     */
    where: users_googleWhereUniqueInput
  }

  /**
   * users_google findFirst
   */
  export type users_googleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter, which users_google to fetch.
     */
    where?: users_googleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_googles to fetch.
     */
    orderBy?: users_googleOrderByWithRelationInput | users_googleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_googles.
     */
    cursor?: users_googleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_googles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_googles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_googles.
     */
    distinct?: Users_googleScalarFieldEnum | Users_googleScalarFieldEnum[]
  }

  /**
   * users_google findFirstOrThrow
   */
  export type users_googleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter, which users_google to fetch.
     */
    where?: users_googleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_googles to fetch.
     */
    orderBy?: users_googleOrderByWithRelationInput | users_googleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_googles.
     */
    cursor?: users_googleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_googles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_googles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_googles.
     */
    distinct?: Users_googleScalarFieldEnum | Users_googleScalarFieldEnum[]
  }

  /**
   * users_google findMany
   */
  export type users_googleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter, which users_googles to fetch.
     */
    where?: users_googleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_googles to fetch.
     */
    orderBy?: users_googleOrderByWithRelationInput | users_googleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_googles.
     */
    cursor?: users_googleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_googles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_googles.
     */
    skip?: number
    distinct?: Users_googleScalarFieldEnum | Users_googleScalarFieldEnum[]
  }

  /**
   * users_google create
   */
  export type users_googleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * The data needed to create a users_google.
     */
    data: XOR<users_googleCreateInput, users_googleUncheckedCreateInput>
  }

  /**
   * users_google createMany
   */
  export type users_googleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_googles.
     */
    data: users_googleCreateManyInput | users_googleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_google update
   */
  export type users_googleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * The data needed to update a users_google.
     */
    data: XOR<users_googleUpdateInput, users_googleUncheckedUpdateInput>
    /**
     * Choose, which users_google to update.
     */
    where: users_googleWhereUniqueInput
  }

  /**
   * users_google updateMany
   */
  export type users_googleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_googles.
     */
    data: XOR<users_googleUpdateManyMutationInput, users_googleUncheckedUpdateManyInput>
    /**
     * Filter which users_googles to update
     */
    where?: users_googleWhereInput
    /**
     * Limit how many users_googles to update.
     */
    limit?: number
  }

  /**
   * users_google upsert
   */
  export type users_googleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * The filter to search for the users_google to update in case it exists.
     */
    where: users_googleWhereUniqueInput
    /**
     * In case the users_google found by the `where` argument doesn't exist, create a new users_google with this data.
     */
    create: XOR<users_googleCreateInput, users_googleUncheckedCreateInput>
    /**
     * In case the users_google was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_googleUpdateInput, users_googleUncheckedUpdateInput>
  }

  /**
   * users_google delete
   */
  export type users_googleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
    /**
     * Filter which users_google to delete.
     */
    where: users_googleWhereUniqueInput
  }

  /**
   * users_google deleteMany
   */
  export type users_googleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_googles to delete
     */
    where?: users_googleWhereInput
    /**
     * Limit how many users_googles to delete.
     */
    limit?: number
  }

  /**
   * users_google without action
   */
  export type users_googleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_google
     */
    select?: users_googleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_google
     */
    omit?: users_googleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Article_tagScalarFieldEnum: {
    id: 'id',
    article_id: 'article_id',
    tag_id: 'tag_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Article_tagScalarFieldEnum = (typeof Article_tagScalarFieldEnum)[keyof typeof Article_tagScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    content_detail: 'content_detail',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const CacheScalarFieldEnum: {
    key: 'key',
    value: 'value',
    expiration: 'expiration'
  };

  export type CacheScalarFieldEnum = (typeof CacheScalarFieldEnum)[keyof typeof CacheScalarFieldEnum]


  export const Google_mitra_imagesScalarFieldEnum: {
    id: 'id',
    folder_id: 'folder_id',
    image_id: 'image_id',
    image_name: 'image_name',
    image_path: 'image_path',
    image_desc: 'image_desc',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Google_mitra_imagesScalarFieldEnum = (typeof Google_mitra_imagesScalarFieldEnum)[keyof typeof Google_mitra_imagesScalarFieldEnum]


  export const Insta_api_credentialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    client_id: 'client_id',
    redirect_uri: 'redirect_uri',
    scope: 'scope',
    client_secret: 'client_secret',
    access_token: 'access_token',
    created_date: 'created_date',
    updated_date: 'updated_date'
  };

  export type Insta_api_credentialsScalarFieldEnum = (typeof Insta_api_credentialsScalarFieldEnum)[keyof typeof Insta_api_credentialsScalarFieldEnum]


  export const LayanansScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LayanansScalarFieldEnum = (typeof LayanansScalarFieldEnum)[keyof typeof LayanansScalarFieldEnum]


  export const Meta_descriptionsScalarFieldEnum: {
    id: 'id',
    routename: 'routename',
    meta_desc: 'meta_desc',
    meta_title: 'meta_title',
    title: 'title',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Meta_descriptionsScalarFieldEnum = (typeof Meta_descriptionsScalarFieldEnum)[keyof typeof Meta_descriptionsScalarFieldEnum]


  export const Mitra_menusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    classname: 'classname',
    url: 'url',
    order: 'order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Mitra_menusScalarFieldEnum = (typeof Mitra_menusScalarFieldEnum)[keyof typeof Mitra_menusScalarFieldEnum]


  export const PartnersScalarFieldEnum: {
    id: 'id',
    path: 'path',
    alt: 'alt',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PartnersScalarFieldEnum = (typeof PartnersScalarFieldEnum)[keyof typeof PartnersScalarFieldEnum]


  export const ProduksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    alt: 'alt',
    slug: 'slug',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProduksScalarFieldEnum = (typeof ProduksScalarFieldEnum)[keyof typeof ProduksScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload',
    last_activity: 'last_activity'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Users_googleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    scope: 'scope',
    token_type: 'token_type',
    refresh_token_expires_in: 'refresh_token_expires_in',
    expiry_date: 'expiry_date'
  };

  export type Users_googleScalarFieldEnum = (typeof Users_googleScalarFieldEnum)[keyof typeof Users_googleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const articlesOrderByRelevanceFieldEnum: {
    title: 'title',
    slug: 'slug',
    content: 'content',
    content_detail: 'content_detail'
  };

  export type articlesOrderByRelevanceFieldEnum = (typeof articlesOrderByRelevanceFieldEnum)[keyof typeof articlesOrderByRelevanceFieldEnum]


  export const cacheOrderByRelevanceFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type cacheOrderByRelevanceFieldEnum = (typeof cacheOrderByRelevanceFieldEnum)[keyof typeof cacheOrderByRelevanceFieldEnum]


  export const google_mitra_imagesOrderByRelevanceFieldEnum: {
    folder_id: 'folder_id',
    image_id: 'image_id',
    image_name: 'image_name',
    image_path: 'image_path',
    image_desc: 'image_desc'
  };

  export type google_mitra_imagesOrderByRelevanceFieldEnum = (typeof google_mitra_imagesOrderByRelevanceFieldEnum)[keyof typeof google_mitra_imagesOrderByRelevanceFieldEnum]


  export const insta_api_credentialsOrderByRelevanceFieldEnum: {
    name: 'name',
    redirect_uri: 'redirect_uri',
    scope: 'scope',
    client_secret: 'client_secret',
    access_token: 'access_token'
  };

  export type insta_api_credentialsOrderByRelevanceFieldEnum = (typeof insta_api_credentialsOrderByRelevanceFieldEnum)[keyof typeof insta_api_credentialsOrderByRelevanceFieldEnum]


  export const layanansOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type layanansOrderByRelevanceFieldEnum = (typeof layanansOrderByRelevanceFieldEnum)[keyof typeof layanansOrderByRelevanceFieldEnum]


  export const meta_descriptionsOrderByRelevanceFieldEnum: {
    routename: 'routename',
    meta_desc: 'meta_desc',
    meta_title: 'meta_title',
    title: 'title'
  };

  export type meta_descriptionsOrderByRelevanceFieldEnum = (typeof meta_descriptionsOrderByRelevanceFieldEnum)[keyof typeof meta_descriptionsOrderByRelevanceFieldEnum]


  export const mitra_menusOrderByRelevanceFieldEnum: {
    name: 'name',
    classname: 'classname',
    url: 'url'
  };

  export type mitra_menusOrderByRelevanceFieldEnum = (typeof mitra_menusOrderByRelevanceFieldEnum)[keyof typeof mitra_menusOrderByRelevanceFieldEnum]


  export const partnersOrderByRelevanceFieldEnum: {
    path: 'path',
    alt: 'alt'
  };

  export type partnersOrderByRelevanceFieldEnum = (typeof partnersOrderByRelevanceFieldEnum)[keyof typeof partnersOrderByRelevanceFieldEnum]


  export const produksOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image: 'image',
    alt: 'alt',
    slug: 'slug'
  };

  export type produksOrderByRelevanceFieldEnum = (typeof produksOrderByRelevanceFieldEnum)[keyof typeof produksOrderByRelevanceFieldEnum]


  export const sessionsOrderByRelevanceFieldEnum: {
    id: 'id',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    payload: 'payload'
  };

  export type sessionsOrderByRelevanceFieldEnum = (typeof sessionsOrderByRelevanceFieldEnum)[keyof typeof sessionsOrderByRelevanceFieldEnum]


  export const tagsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type tagsOrderByRelevanceFieldEnum = (typeof tagsOrderByRelevanceFieldEnum)[keyof typeof tagsOrderByRelevanceFieldEnum]


  export const users_googleOrderByRelevanceFieldEnum: {
    name: 'name',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    scope: 'scope',
    token_type: 'token_type'
  };

  export type users_googleOrderByRelevanceFieldEnum = (typeof users_googleOrderByRelevanceFieldEnum)[keyof typeof users_googleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type article_tagWhereInput = {
    AND?: article_tagWhereInput | article_tagWhereInput[]
    OR?: article_tagWhereInput[]
    NOT?: article_tagWhereInput | article_tagWhereInput[]
    id?: BigIntFilter<"article_tag"> | bigint | number
    article_id?: BigIntFilter<"article_tag"> | bigint | number
    tag_id?: BigIntFilter<"article_tag"> | bigint | number
    created_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
    articles?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type article_tagOrderByWithRelationInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    articles?: articlesOrderByWithRelationInput
    tags?: tagsOrderByWithRelationInput
  }

  export type article_tagWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: article_tagWhereInput | article_tagWhereInput[]
    OR?: article_tagWhereInput[]
    NOT?: article_tagWhereInput | article_tagWhereInput[]
    article_id?: BigIntFilter<"article_tag"> | bigint | number
    tag_id?: BigIntFilter<"article_tag"> | bigint | number
    created_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
    articles?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id">

  export type article_tagOrderByWithAggregationInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: article_tagCountOrderByAggregateInput
    _avg?: article_tagAvgOrderByAggregateInput
    _max?: article_tagMaxOrderByAggregateInput
    _min?: article_tagMinOrderByAggregateInput
    _sum?: article_tagSumOrderByAggregateInput
  }

  export type article_tagScalarWhereWithAggregatesInput = {
    AND?: article_tagScalarWhereWithAggregatesInput | article_tagScalarWhereWithAggregatesInput[]
    OR?: article_tagScalarWhereWithAggregatesInput[]
    NOT?: article_tagScalarWhereWithAggregatesInput | article_tagScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"article_tag"> | bigint | number
    article_id?: BigIntWithAggregatesFilter<"article_tag"> | bigint | number
    tag_id?: BigIntWithAggregatesFilter<"article_tag"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"article_tag"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"article_tag"> | Date | string | null
  }

  export type articlesWhereInput = {
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    id?: BigIntFilter<"articles"> | bigint | number
    title?: StringFilter<"articles"> | string
    slug?: StringFilter<"articles"> | string
    content?: StringFilter<"articles"> | string
    content_detail?: StringFilter<"articles"> | string
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    article_tag?: Article_tagListRelationFilter
  }

  export type articlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    content_detail?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article_tag?: article_tagOrderByRelationAggregateInput
    _relevance?: articlesOrderByRelevanceInput
  }

  export type articlesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    title?: StringFilter<"articles"> | string
    content?: StringFilter<"articles"> | string
    content_detail?: StringFilter<"articles"> | string
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    article_tag?: Article_tagListRelationFilter
  }, "id" | "slug">

  export type articlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    content_detail?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: articlesCountOrderByAggregateInput
    _avg?: articlesAvgOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
    _sum?: articlesSumOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    OR?: articlesScalarWhereWithAggregatesInput[]
    NOT?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"articles"> | bigint | number
    title?: StringWithAggregatesFilter<"articles"> | string
    slug?: StringWithAggregatesFilter<"articles"> | string
    content?: StringWithAggregatesFilter<"articles"> | string
    content_detail?: StringWithAggregatesFilter<"articles"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
  }

  export type cacheWhereInput = {
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    key?: StringFilter<"cache"> | string
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }

  export type cacheOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _relevance?: cacheOrderByRelevanceInput
  }

  export type cacheWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: cacheWhereInput | cacheWhereInput[]
    OR?: cacheWhereInput[]
    NOT?: cacheWhereInput | cacheWhereInput[]
    value?: StringFilter<"cache"> | string
    expiration?: IntFilter<"cache"> | number
  }, "key">

  export type cacheOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
    _count?: cacheCountOrderByAggregateInput
    _avg?: cacheAvgOrderByAggregateInput
    _max?: cacheMaxOrderByAggregateInput
    _min?: cacheMinOrderByAggregateInput
    _sum?: cacheSumOrderByAggregateInput
  }

  export type cacheScalarWhereWithAggregatesInput = {
    AND?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    OR?: cacheScalarWhereWithAggregatesInput[]
    NOT?: cacheScalarWhereWithAggregatesInput | cacheScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"cache"> | string
    value?: StringWithAggregatesFilter<"cache"> | string
    expiration?: IntWithAggregatesFilter<"cache"> | number
  }

  export type google_mitra_imagesWhereInput = {
    AND?: google_mitra_imagesWhereInput | google_mitra_imagesWhereInput[]
    OR?: google_mitra_imagesWhereInput[]
    NOT?: google_mitra_imagesWhereInput | google_mitra_imagesWhereInput[]
    id?: IntFilter<"google_mitra_images"> | number
    folder_id?: StringFilter<"google_mitra_images"> | string
    image_id?: StringFilter<"google_mitra_images"> | string
    image_name?: StringFilter<"google_mitra_images"> | string
    image_path?: StringNullableFilter<"google_mitra_images"> | string | null
    image_desc?: StringNullableFilter<"google_mitra_images"> | string | null
    created_at?: DateTimeNullableFilter<"google_mitra_images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"google_mitra_images"> | Date | string | null
  }

  export type google_mitra_imagesOrderByWithRelationInput = {
    id?: SortOrder
    folder_id?: SortOrder
    image_id?: SortOrder
    image_name?: SortOrder
    image_path?: SortOrderInput | SortOrder
    image_desc?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: google_mitra_imagesOrderByRelevanceInput
  }

  export type google_mitra_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: google_mitra_imagesWhereInput | google_mitra_imagesWhereInput[]
    OR?: google_mitra_imagesWhereInput[]
    NOT?: google_mitra_imagesWhereInput | google_mitra_imagesWhereInput[]
    folder_id?: StringFilter<"google_mitra_images"> | string
    image_id?: StringFilter<"google_mitra_images"> | string
    image_name?: StringFilter<"google_mitra_images"> | string
    image_path?: StringNullableFilter<"google_mitra_images"> | string | null
    image_desc?: StringNullableFilter<"google_mitra_images"> | string | null
    created_at?: DateTimeNullableFilter<"google_mitra_images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"google_mitra_images"> | Date | string | null
  }, "id">

  export type google_mitra_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    folder_id?: SortOrder
    image_id?: SortOrder
    image_name?: SortOrder
    image_path?: SortOrderInput | SortOrder
    image_desc?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: google_mitra_imagesCountOrderByAggregateInput
    _avg?: google_mitra_imagesAvgOrderByAggregateInput
    _max?: google_mitra_imagesMaxOrderByAggregateInput
    _min?: google_mitra_imagesMinOrderByAggregateInput
    _sum?: google_mitra_imagesSumOrderByAggregateInput
  }

  export type google_mitra_imagesScalarWhereWithAggregatesInput = {
    AND?: google_mitra_imagesScalarWhereWithAggregatesInput | google_mitra_imagesScalarWhereWithAggregatesInput[]
    OR?: google_mitra_imagesScalarWhereWithAggregatesInput[]
    NOT?: google_mitra_imagesScalarWhereWithAggregatesInput | google_mitra_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"google_mitra_images"> | number
    folder_id?: StringWithAggregatesFilter<"google_mitra_images"> | string
    image_id?: StringWithAggregatesFilter<"google_mitra_images"> | string
    image_name?: StringWithAggregatesFilter<"google_mitra_images"> | string
    image_path?: StringNullableWithAggregatesFilter<"google_mitra_images"> | string | null
    image_desc?: StringNullableWithAggregatesFilter<"google_mitra_images"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"google_mitra_images"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"google_mitra_images"> | Date | string | null
  }

  export type insta_api_credentialsWhereInput = {
    AND?: insta_api_credentialsWhereInput | insta_api_credentialsWhereInput[]
    OR?: insta_api_credentialsWhereInput[]
    NOT?: insta_api_credentialsWhereInput | insta_api_credentialsWhereInput[]
    id?: IntFilter<"insta_api_credentials"> | number
    name?: StringNullableFilter<"insta_api_credentials"> | string | null
    client_id?: BigIntFilter<"insta_api_credentials"> | bigint | number
    redirect_uri?: StringNullableFilter<"insta_api_credentials"> | string | null
    scope?: StringNullableFilter<"insta_api_credentials"> | string | null
    client_secret?: StringNullableFilter<"insta_api_credentials"> | string | null
    access_token?: StringNullableFilter<"insta_api_credentials"> | string | null
    created_date?: DateTimeFilter<"insta_api_credentials"> | Date | string
    updated_date?: DateTimeNullableFilter<"insta_api_credentials"> | Date | string | null
  }

  export type insta_api_credentialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    client_secret?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    _relevance?: insta_api_credentialsOrderByRelevanceInput
  }

  export type insta_api_credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    client_id?: bigint | number
    AND?: insta_api_credentialsWhereInput | insta_api_credentialsWhereInput[]
    OR?: insta_api_credentialsWhereInput[]
    NOT?: insta_api_credentialsWhereInput | insta_api_credentialsWhereInput[]
    name?: StringNullableFilter<"insta_api_credentials"> | string | null
    redirect_uri?: StringNullableFilter<"insta_api_credentials"> | string | null
    scope?: StringNullableFilter<"insta_api_credentials"> | string | null
    client_secret?: StringNullableFilter<"insta_api_credentials"> | string | null
    access_token?: StringNullableFilter<"insta_api_credentials"> | string | null
    created_date?: DateTimeFilter<"insta_api_credentials"> | Date | string
    updated_date?: DateTimeNullableFilter<"insta_api_credentials"> | Date | string | null
  }, "id" | "client_id">

  export type insta_api_credentialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    client_secret?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    created_date?: SortOrder
    updated_date?: SortOrderInput | SortOrder
    _count?: insta_api_credentialsCountOrderByAggregateInput
    _avg?: insta_api_credentialsAvgOrderByAggregateInput
    _max?: insta_api_credentialsMaxOrderByAggregateInput
    _min?: insta_api_credentialsMinOrderByAggregateInput
    _sum?: insta_api_credentialsSumOrderByAggregateInput
  }

  export type insta_api_credentialsScalarWhereWithAggregatesInput = {
    AND?: insta_api_credentialsScalarWhereWithAggregatesInput | insta_api_credentialsScalarWhereWithAggregatesInput[]
    OR?: insta_api_credentialsScalarWhereWithAggregatesInput[]
    NOT?: insta_api_credentialsScalarWhereWithAggregatesInput | insta_api_credentialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"insta_api_credentials"> | number
    name?: StringNullableWithAggregatesFilter<"insta_api_credentials"> | string | null
    client_id?: BigIntWithAggregatesFilter<"insta_api_credentials"> | bigint | number
    redirect_uri?: StringNullableWithAggregatesFilter<"insta_api_credentials"> | string | null
    scope?: StringNullableWithAggregatesFilter<"insta_api_credentials"> | string | null
    client_secret?: StringNullableWithAggregatesFilter<"insta_api_credentials"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"insta_api_credentials"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"insta_api_credentials"> | Date | string
    updated_date?: DateTimeNullableWithAggregatesFilter<"insta_api_credentials"> | Date | string | null
  }

  export type layanansWhereInput = {
    AND?: layanansWhereInput | layanansWhereInput[]
    OR?: layanansWhereInput[]
    NOT?: layanansWhereInput | layanansWhereInput[]
    id?: BigIntFilter<"layanans"> | bigint | number
    title?: StringFilter<"layanans"> | string
    description?: StringFilter<"layanans"> | string
    image?: StringFilter<"layanans"> | string
    created_at?: DateTimeNullableFilter<"layanans"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"layanans"> | Date | string | null
  }

  export type layanansOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: layanansOrderByRelevanceInput
  }

  export type layanansWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: layanansWhereInput | layanansWhereInput[]
    OR?: layanansWhereInput[]
    NOT?: layanansWhereInput | layanansWhereInput[]
    title?: StringFilter<"layanans"> | string
    description?: StringFilter<"layanans"> | string
    image?: StringFilter<"layanans"> | string
    created_at?: DateTimeNullableFilter<"layanans"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"layanans"> | Date | string | null
  }, "id">

  export type layanansOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: layanansCountOrderByAggregateInput
    _avg?: layanansAvgOrderByAggregateInput
    _max?: layanansMaxOrderByAggregateInput
    _min?: layanansMinOrderByAggregateInput
    _sum?: layanansSumOrderByAggregateInput
  }

  export type layanansScalarWhereWithAggregatesInput = {
    AND?: layanansScalarWhereWithAggregatesInput | layanansScalarWhereWithAggregatesInput[]
    OR?: layanansScalarWhereWithAggregatesInput[]
    NOT?: layanansScalarWhereWithAggregatesInput | layanansScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"layanans"> | bigint | number
    title?: StringWithAggregatesFilter<"layanans"> | string
    description?: StringWithAggregatesFilter<"layanans"> | string
    image?: StringWithAggregatesFilter<"layanans"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"layanans"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"layanans"> | Date | string | null
  }

  export type meta_descriptionsWhereInput = {
    AND?: meta_descriptionsWhereInput | meta_descriptionsWhereInput[]
    OR?: meta_descriptionsWhereInput[]
    NOT?: meta_descriptionsWhereInput | meta_descriptionsWhereInput[]
    id?: BigIntFilter<"meta_descriptions"> | bigint | number
    routename?: StringFilter<"meta_descriptions"> | string
    meta_desc?: StringFilter<"meta_descriptions"> | string
    meta_title?: StringFilter<"meta_descriptions"> | string
    title?: StringFilter<"meta_descriptions"> | string
    created_at?: DateTimeNullableFilter<"meta_descriptions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"meta_descriptions"> | Date | string | null
  }

  export type meta_descriptionsOrderByWithRelationInput = {
    id?: SortOrder
    routename?: SortOrder
    meta_desc?: SortOrder
    meta_title?: SortOrder
    title?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: meta_descriptionsOrderByRelevanceInput
  }

  export type meta_descriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    routename?: string
    AND?: meta_descriptionsWhereInput | meta_descriptionsWhereInput[]
    OR?: meta_descriptionsWhereInput[]
    NOT?: meta_descriptionsWhereInput | meta_descriptionsWhereInput[]
    meta_desc?: StringFilter<"meta_descriptions"> | string
    meta_title?: StringFilter<"meta_descriptions"> | string
    title?: StringFilter<"meta_descriptions"> | string
    created_at?: DateTimeNullableFilter<"meta_descriptions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"meta_descriptions"> | Date | string | null
  }, "id" | "routename">

  export type meta_descriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    routename?: SortOrder
    meta_desc?: SortOrder
    meta_title?: SortOrder
    title?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: meta_descriptionsCountOrderByAggregateInput
    _avg?: meta_descriptionsAvgOrderByAggregateInput
    _max?: meta_descriptionsMaxOrderByAggregateInput
    _min?: meta_descriptionsMinOrderByAggregateInput
    _sum?: meta_descriptionsSumOrderByAggregateInput
  }

  export type meta_descriptionsScalarWhereWithAggregatesInput = {
    AND?: meta_descriptionsScalarWhereWithAggregatesInput | meta_descriptionsScalarWhereWithAggregatesInput[]
    OR?: meta_descriptionsScalarWhereWithAggregatesInput[]
    NOT?: meta_descriptionsScalarWhereWithAggregatesInput | meta_descriptionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"meta_descriptions"> | bigint | number
    routename?: StringWithAggregatesFilter<"meta_descriptions"> | string
    meta_desc?: StringWithAggregatesFilter<"meta_descriptions"> | string
    meta_title?: StringWithAggregatesFilter<"meta_descriptions"> | string
    title?: StringWithAggregatesFilter<"meta_descriptions"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"meta_descriptions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"meta_descriptions"> | Date | string | null
  }

  export type mitra_menusWhereInput = {
    AND?: mitra_menusWhereInput | mitra_menusWhereInput[]
    OR?: mitra_menusWhereInput[]
    NOT?: mitra_menusWhereInput | mitra_menusWhereInput[]
    id?: BigIntFilter<"mitra_menus"> | bigint | number
    name?: StringFilter<"mitra_menus"> | string
    classname?: StringFilter<"mitra_menus"> | string
    url?: StringFilter<"mitra_menus"> | string
    order?: IntFilter<"mitra_menus"> | number
    is_active?: BoolFilter<"mitra_menus"> | boolean
    created_at?: DateTimeNullableFilter<"mitra_menus"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"mitra_menus"> | Date | string | null
  }

  export type mitra_menusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    classname?: SortOrder
    url?: SortOrder
    order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: mitra_menusOrderByRelevanceInput
  }

  export type mitra_menusWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: mitra_menusWhereInput | mitra_menusWhereInput[]
    OR?: mitra_menusWhereInput[]
    NOT?: mitra_menusWhereInput | mitra_menusWhereInput[]
    name?: StringFilter<"mitra_menus"> | string
    classname?: StringFilter<"mitra_menus"> | string
    url?: StringFilter<"mitra_menus"> | string
    order?: IntFilter<"mitra_menus"> | number
    is_active?: BoolFilter<"mitra_menus"> | boolean
    created_at?: DateTimeNullableFilter<"mitra_menus"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"mitra_menus"> | Date | string | null
  }, "id">

  export type mitra_menusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    classname?: SortOrder
    url?: SortOrder
    order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: mitra_menusCountOrderByAggregateInput
    _avg?: mitra_menusAvgOrderByAggregateInput
    _max?: mitra_menusMaxOrderByAggregateInput
    _min?: mitra_menusMinOrderByAggregateInput
    _sum?: mitra_menusSumOrderByAggregateInput
  }

  export type mitra_menusScalarWhereWithAggregatesInput = {
    AND?: mitra_menusScalarWhereWithAggregatesInput | mitra_menusScalarWhereWithAggregatesInput[]
    OR?: mitra_menusScalarWhereWithAggregatesInput[]
    NOT?: mitra_menusScalarWhereWithAggregatesInput | mitra_menusScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"mitra_menus"> | bigint | number
    name?: StringWithAggregatesFilter<"mitra_menus"> | string
    classname?: StringWithAggregatesFilter<"mitra_menus"> | string
    url?: StringWithAggregatesFilter<"mitra_menus"> | string
    order?: IntWithAggregatesFilter<"mitra_menus"> | number
    is_active?: BoolWithAggregatesFilter<"mitra_menus"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"mitra_menus"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"mitra_menus"> | Date | string | null
  }

  export type partnersWhereInput = {
    AND?: partnersWhereInput | partnersWhereInput[]
    OR?: partnersWhereInput[]
    NOT?: partnersWhereInput | partnersWhereInput[]
    id?: BigIntFilter<"partners"> | bigint | number
    path?: StringFilter<"partners"> | string
    alt?: StringFilter<"partners"> | string
    created_at?: DateTimeNullableFilter<"partners"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"partners"> | Date | string | null
  }

  export type partnersOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    alt?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: partnersOrderByRelevanceInput
  }

  export type partnersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: partnersWhereInput | partnersWhereInput[]
    OR?: partnersWhereInput[]
    NOT?: partnersWhereInput | partnersWhereInput[]
    path?: StringFilter<"partners"> | string
    alt?: StringFilter<"partners"> | string
    created_at?: DateTimeNullableFilter<"partners"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"partners"> | Date | string | null
  }, "id">

  export type partnersOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    alt?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: partnersCountOrderByAggregateInput
    _avg?: partnersAvgOrderByAggregateInput
    _max?: partnersMaxOrderByAggregateInput
    _min?: partnersMinOrderByAggregateInput
    _sum?: partnersSumOrderByAggregateInput
  }

  export type partnersScalarWhereWithAggregatesInput = {
    AND?: partnersScalarWhereWithAggregatesInput | partnersScalarWhereWithAggregatesInput[]
    OR?: partnersScalarWhereWithAggregatesInput[]
    NOT?: partnersScalarWhereWithAggregatesInput | partnersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"partners"> | bigint | number
    path?: StringWithAggregatesFilter<"partners"> | string
    alt?: StringWithAggregatesFilter<"partners"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"partners"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"partners"> | Date | string | null
  }

  export type produksWhereInput = {
    AND?: produksWhereInput | produksWhereInput[]
    OR?: produksWhereInput[]
    NOT?: produksWhereInput | produksWhereInput[]
    id?: BigIntFilter<"produks"> | bigint | number
    title?: StringFilter<"produks"> | string
    description?: StringFilter<"produks"> | string
    image?: StringFilter<"produks"> | string
    alt?: StringFilter<"produks"> | string
    slug?: StringFilter<"produks"> | string
    created_at?: DateTimeNullableFilter<"produks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"produks"> | Date | string | null
  }

  export type produksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    alt?: SortOrder
    slug?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: produksOrderByRelevanceInput
  }

  export type produksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: produksWhereInput | produksWhereInput[]
    OR?: produksWhereInput[]
    NOT?: produksWhereInput | produksWhereInput[]
    title?: StringFilter<"produks"> | string
    description?: StringFilter<"produks"> | string
    image?: StringFilter<"produks"> | string
    alt?: StringFilter<"produks"> | string
    created_at?: DateTimeNullableFilter<"produks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"produks"> | Date | string | null
  }, "id" | "slug">

  export type produksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    alt?: SortOrder
    slug?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: produksCountOrderByAggregateInput
    _avg?: produksAvgOrderByAggregateInput
    _max?: produksMaxOrderByAggregateInput
    _min?: produksMinOrderByAggregateInput
    _sum?: produksSumOrderByAggregateInput
  }

  export type produksScalarWhereWithAggregatesInput = {
    AND?: produksScalarWhereWithAggregatesInput | produksScalarWhereWithAggregatesInput[]
    OR?: produksScalarWhereWithAggregatesInput[]
    NOT?: produksScalarWhereWithAggregatesInput | produksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"produks"> | bigint | number
    title?: StringWithAggregatesFilter<"produks"> | string
    description?: StringWithAggregatesFilter<"produks"> | string
    image?: StringWithAggregatesFilter<"produks"> | string
    alt?: StringWithAggregatesFilter<"produks"> | string
    slug?: StringWithAggregatesFilter<"produks"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"produks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"produks"> | Date | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: StringFilter<"sessions"> | string
    user_id?: BigIntNullableFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _relevance?: sessionsOrderByRelevanceInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    user_id?: BigIntNullableFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    payload?: StringFilter<"sessions"> | string
    last_activity?: IntFilter<"sessions"> | number
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sessions"> | string
    user_id?: BigIntNullableWithAggregatesFilter<"sessions"> | bigint | number | null
    ip_address?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    payload?: StringWithAggregatesFilter<"sessions"> | string
    last_activity?: IntWithAggregatesFilter<"sessions"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: BigIntFilter<"tags"> | bigint | number
    name?: StringFilter<"tags"> | string
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    article_tag?: Article_tagListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article_tag?: article_tagOrderByRelationAggregateInput
    _relevance?: tagsOrderByRelevanceInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    name?: StringFilter<"tags"> | string
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    article_tag?: Article_tagListRelationFilter
  }, "id">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tags"> | bigint | number
    name?: StringWithAggregatesFilter<"tags"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
  }

  export type users_googleWhereInput = {
    AND?: users_googleWhereInput | users_googleWhereInput[]
    OR?: users_googleWhereInput[]
    NOT?: users_googleWhereInput | users_googleWhereInput[]
    id?: IntFilter<"users_google"> | number
    name?: StringFilter<"users_google"> | string
    access_token?: StringNullableFilter<"users_google"> | string | null
    refresh_token?: StringNullableFilter<"users_google"> | string | null
    scope?: StringFilter<"users_google"> | string
    token_type?: StringFilter<"users_google"> | string
    refresh_token_expires_in?: BigIntNullableFilter<"users_google"> | bigint | number | null
    expiry_date?: BigIntNullableFilter<"users_google"> | bigint | number | null
  }

  export type users_googleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    scope?: SortOrder
    token_type?: SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    _relevance?: users_googleOrderByRelevanceInput
  }

  export type users_googleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: users_googleWhereInput | users_googleWhereInput[]
    OR?: users_googleWhereInput[]
    NOT?: users_googleWhereInput | users_googleWhereInput[]
    name?: StringFilter<"users_google"> | string
    access_token?: StringNullableFilter<"users_google"> | string | null
    refresh_token?: StringNullableFilter<"users_google"> | string | null
    scope?: StringFilter<"users_google"> | string
    token_type?: StringFilter<"users_google"> | string
    refresh_token_expires_in?: BigIntNullableFilter<"users_google"> | bigint | number | null
    expiry_date?: BigIntNullableFilter<"users_google"> | bigint | number | null
  }, "id">

  export type users_googleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    access_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    scope?: SortOrder
    token_type?: SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    _count?: users_googleCountOrderByAggregateInput
    _avg?: users_googleAvgOrderByAggregateInput
    _max?: users_googleMaxOrderByAggregateInput
    _min?: users_googleMinOrderByAggregateInput
    _sum?: users_googleSumOrderByAggregateInput
  }

  export type users_googleScalarWhereWithAggregatesInput = {
    AND?: users_googleScalarWhereWithAggregatesInput | users_googleScalarWhereWithAggregatesInput[]
    OR?: users_googleScalarWhereWithAggregatesInput[]
    NOT?: users_googleScalarWhereWithAggregatesInput | users_googleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users_google"> | number
    name?: StringWithAggregatesFilter<"users_google"> | string
    access_token?: StringNullableWithAggregatesFilter<"users_google"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"users_google"> | string | null
    scope?: StringWithAggregatesFilter<"users_google"> | string
    token_type?: StringWithAggregatesFilter<"users_google"> | string
    refresh_token_expires_in?: BigIntNullableWithAggregatesFilter<"users_google"> | bigint | number | null
    expiry_date?: BigIntNullableWithAggregatesFilter<"users_google"> | bigint | number | null
  }

  export type article_tagCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    articles: articlesCreateNestedOneWithoutArticle_tagInput
    tags: tagsCreateNestedOneWithoutArticle_tagInput
  }

  export type article_tagUncheckedCreateInput = {
    id?: bigint | number
    article_id: bigint | number
    tag_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUpdateOneRequiredWithoutArticle_tagNestedInput
    tags?: tagsUpdateOneRequiredWithoutArticle_tagNestedInput
  }

  export type article_tagUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagCreateManyInput = {
    id?: bigint | number
    article_id: bigint | number
    tag_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateInput = {
    id?: bigint | number
    title: string
    slug: string
    content: string
    content_detail: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tag?: article_tagCreateNestedManyWithoutArticlesInput
  }

  export type articlesUncheckedCreateInput = {
    id?: bigint | number
    title: string
    slug: string
    content: string
    content_detail: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tag?: article_tagUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type articlesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tag?: article_tagUpdateManyWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tag?: article_tagUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type articlesCreateManyInput = {
    id?: bigint | number
    title: string
    slug: string
    content: string
    content_detail: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type articlesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cacheCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUncheckedCreateInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheCreateManyInput = {
    key: string
    value: string
    expiration: number
  }

  export type cacheUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type cacheUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiration?: IntFieldUpdateOperationsInput | number
  }

  export type google_mitra_imagesCreateInput = {
    folder_id: string
    image_id: string
    image_name: string
    image_path?: string | null
    image_desc?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type google_mitra_imagesUncheckedCreateInput = {
    id?: number
    folder_id: string
    image_id: string
    image_name: string
    image_path?: string | null
    image_desc?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type google_mitra_imagesUpdateInput = {
    folder_id?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    image_name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type google_mitra_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_id?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    image_name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type google_mitra_imagesCreateManyInput = {
    id?: number
    folder_id: string
    image_id: string
    image_name: string
    image_path?: string | null
    image_desc?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type google_mitra_imagesUpdateManyMutationInput = {
    folder_id?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    image_name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type google_mitra_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_id?: StringFieldUpdateOperationsInput | string
    image_id?: StringFieldUpdateOperationsInput | string
    image_name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    image_desc?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insta_api_credentialsCreateInput = {
    name?: string | null
    client_id?: bigint | number
    redirect_uri?: string | null
    scope?: string | null
    client_secret?: string | null
    access_token?: string | null
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type insta_api_credentialsUncheckedCreateInput = {
    id?: number
    name?: string | null
    client_id?: bigint | number
    redirect_uri?: string | null
    scope?: string | null
    client_secret?: string | null
    access_token?: string | null
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type insta_api_credentialsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redirect_uri?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insta_api_credentialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redirect_uri?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insta_api_credentialsCreateManyInput = {
    id?: number
    name?: string | null
    client_id?: bigint | number
    redirect_uri?: string | null
    scope?: string | null
    client_secret?: string | null
    access_token?: string | null
    created_date?: Date | string
    updated_date?: Date | string | null
  }

  export type insta_api_credentialsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redirect_uri?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insta_api_credentialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redirect_uri?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client_secret?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type layanansCreateInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type layanansUncheckedCreateInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type layanansUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type layanansUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type layanansCreateManyInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type layanansUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type layanansUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meta_descriptionsCreateInput = {
    id?: bigint | number
    routename: string
    meta_desc: string
    meta_title: string
    title: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type meta_descriptionsUncheckedCreateInput = {
    id?: bigint | number
    routename: string
    meta_desc: string
    meta_title: string
    title: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type meta_descriptionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    routename?: StringFieldUpdateOperationsInput | string
    meta_desc?: StringFieldUpdateOperationsInput | string
    meta_title?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meta_descriptionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    routename?: StringFieldUpdateOperationsInput | string
    meta_desc?: StringFieldUpdateOperationsInput | string
    meta_title?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meta_descriptionsCreateManyInput = {
    id?: bigint | number
    routename: string
    meta_desc: string
    meta_title: string
    title: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type meta_descriptionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    routename?: StringFieldUpdateOperationsInput | string
    meta_desc?: StringFieldUpdateOperationsInput | string
    meta_title?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meta_descriptionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    routename?: StringFieldUpdateOperationsInput | string
    meta_desc?: StringFieldUpdateOperationsInput | string
    meta_title?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mitra_menusCreateInput = {
    id?: bigint | number
    name: string
    classname: string
    url: string
    order?: number
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type mitra_menusUncheckedCreateInput = {
    id?: bigint | number
    name: string
    classname: string
    url: string
    order?: number
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type mitra_menusUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    classname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mitra_menusUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    classname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mitra_menusCreateManyInput = {
    id?: bigint | number
    name: string
    classname: string
    url: string
    order?: number
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type mitra_menusUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    classname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mitra_menusUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    classname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersCreateInput = {
    id?: bigint | number
    path: string
    alt: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type partnersUncheckedCreateInput = {
    id?: bigint | number
    path: string
    alt: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type partnersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersCreateManyInput = {
    id?: bigint | number
    path: string
    alt: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type partnersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type partnersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produksCreateInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    alt: string
    slug: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type produksUncheckedCreateInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    alt: string
    slug: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type produksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produksCreateManyInput = {
    id?: bigint | number
    title: string
    description: string
    image: string
    alt: string
    slug: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type produksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUncheckedCreateInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsCreateManyInput = {
    id: string
    user_id?: bigint | number | null
    ip_address?: string | null
    user_agent?: string | null
    payload: string
    last_activity: number
  }

  export type sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: StringFieldUpdateOperationsInput | string
    last_activity?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tag?: article_tagCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tag?: article_tagUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tag?: article_tagUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tag?: article_tagUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type users_googleCreateInput = {
    name: string
    access_token?: string | null
    refresh_token?: string | null
    scope: string
    token_type: string
    refresh_token_expires_in?: bigint | number | null
    expiry_date?: bigint | number | null
  }

  export type users_googleUncheckedCreateInput = {
    id?: number
    name: string
    access_token?: string | null
    refresh_token?: string | null
    scope: string
    token_type: string
    refresh_token_expires_in?: bigint | number | null
    expiry_date?: bigint | number | null
  }

  export type users_googleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    refresh_token_expires_in?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    expiry_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type users_googleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    refresh_token_expires_in?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    expiry_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type users_googleCreateManyInput = {
    id?: number
    name: string
    access_token?: string | null
    refresh_token?: string | null
    scope: string
    token_type: string
    refresh_token_expires_in?: bigint | number | null
    expiry_date?: bigint | number | null
  }

  export type users_googleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    refresh_token_expires_in?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    expiry_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type users_googleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    refresh_token_expires_in?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    expiry_date?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ArticlesScalarRelationFilter = {
    is?: articlesWhereInput
    isNot?: articlesWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type article_tagCountOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_tagAvgOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
  }

  export type article_tagMaxOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_tagMinOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_tagSumOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    tag_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Article_tagListRelationFilter = {
    every?: article_tagWhereInput
    some?: article_tagWhereInput
    none?: article_tagWhereInput
  }

  export type article_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articlesOrderByRelevanceInput = {
    fields: articlesOrderByRelevanceFieldEnum | articlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    content_detail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    content_detail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    content_detail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type cacheOrderByRelevanceInput = {
    fields: cacheOrderByRelevanceFieldEnum | cacheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cacheCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheAvgOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type cacheMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    expiration?: SortOrder
  }

  export type cacheSumOrderByAggregateInput = {
    expiration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type google_mitra_imagesOrderByRelevanceInput = {
    fields: google_mitra_imagesOrderByRelevanceFieldEnum | google_mitra_imagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type google_mitra_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    folder_id?: SortOrder
    image_id?: SortOrder
    image_name?: SortOrder
    image_path?: SortOrder
    image_desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type google_mitra_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type google_mitra_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    folder_id?: SortOrder
    image_id?: SortOrder
    image_name?: SortOrder
    image_path?: SortOrder
    image_desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type google_mitra_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    folder_id?: SortOrder
    image_id?: SortOrder
    image_name?: SortOrder
    image_path?: SortOrder
    image_desc?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type google_mitra_imagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type insta_api_credentialsOrderByRelevanceInput = {
    fields: insta_api_credentialsOrderByRelevanceFieldEnum | insta_api_credentialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type insta_api_credentialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    scope?: SortOrder
    client_secret?: SortOrder
    access_token?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type insta_api_credentialsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type insta_api_credentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    scope?: SortOrder
    client_secret?: SortOrder
    access_token?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type insta_api_credentialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    client_id?: SortOrder
    redirect_uri?: SortOrder
    scope?: SortOrder
    client_secret?: SortOrder
    access_token?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type insta_api_credentialsSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type layanansOrderByRelevanceInput = {
    fields: layanansOrderByRelevanceFieldEnum | layanansOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type layanansCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type layanansAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type layanansMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type layanansMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type layanansSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type meta_descriptionsOrderByRelevanceInput = {
    fields: meta_descriptionsOrderByRelevanceFieldEnum | meta_descriptionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meta_descriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    routename?: SortOrder
    meta_desc?: SortOrder
    meta_title?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type meta_descriptionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type meta_descriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    routename?: SortOrder
    meta_desc?: SortOrder
    meta_title?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type meta_descriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    routename?: SortOrder
    meta_desc?: SortOrder
    meta_title?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type meta_descriptionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type mitra_menusOrderByRelevanceInput = {
    fields: mitra_menusOrderByRelevanceFieldEnum | mitra_menusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mitra_menusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classname?: SortOrder
    url?: SortOrder
    order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type mitra_menusAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type mitra_menusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classname?: SortOrder
    url?: SortOrder
    order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type mitra_menusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classname?: SortOrder
    url?: SortOrder
    order?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type mitra_menusSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type partnersOrderByRelevanceInput = {
    fields: partnersOrderByRelevanceFieldEnum | partnersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type partnersCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type partnersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type partnersMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type partnersMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    alt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type partnersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type produksOrderByRelevanceInput = {
    fields: produksOrderByRelevanceFieldEnum | produksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    alt?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type produksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type produksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    alt?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type produksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    alt?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type produksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type sessionsOrderByRelevanceInput = {
    fields: sessionsOrderByRelevanceFieldEnum | sessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    user_id?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    payload?: SortOrder
    last_activity?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    user_id?: SortOrder
    last_activity?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type tagsOrderByRelevanceInput = {
    fields: tagsOrderByRelevanceFieldEnum | tagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type users_googleOrderByRelevanceInput = {
    fields: users_googleOrderByRelevanceFieldEnum | users_googleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type users_googleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    token_type?: SortOrder
    refresh_token_expires_in?: SortOrder
    expiry_date?: SortOrder
  }

  export type users_googleAvgOrderByAggregateInput = {
    id?: SortOrder
    refresh_token_expires_in?: SortOrder
    expiry_date?: SortOrder
  }

  export type users_googleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    token_type?: SortOrder
    refresh_token_expires_in?: SortOrder
    expiry_date?: SortOrder
  }

  export type users_googleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    scope?: SortOrder
    token_type?: SortOrder
    refresh_token_expires_in?: SortOrder
    expiry_date?: SortOrder
  }

  export type users_googleSumOrderByAggregateInput = {
    id?: SortOrder
    refresh_token_expires_in?: SortOrder
    expiry_date?: SortOrder
  }

  export type articlesCreateNestedOneWithoutArticle_tagInput = {
    create?: XOR<articlesCreateWithoutArticle_tagInput, articlesUncheckedCreateWithoutArticle_tagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_tagInput
    connect?: articlesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutArticle_tagInput = {
    create?: XOR<tagsCreateWithoutArticle_tagInput, tagsUncheckedCreateWithoutArticle_tagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutArticle_tagInput
    connect?: tagsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type articlesUpdateOneRequiredWithoutArticle_tagNestedInput = {
    create?: XOR<articlesCreateWithoutArticle_tagInput, articlesUncheckedCreateWithoutArticle_tagInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_tagInput
    upsert?: articlesUpsertWithoutArticle_tagInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutArticle_tagInput, articlesUpdateWithoutArticle_tagInput>, articlesUncheckedUpdateWithoutArticle_tagInput>
  }

  export type tagsUpdateOneRequiredWithoutArticle_tagNestedInput = {
    create?: XOR<tagsCreateWithoutArticle_tagInput, tagsUncheckedCreateWithoutArticle_tagInput>
    connectOrCreate?: tagsCreateOrConnectWithoutArticle_tagInput
    upsert?: tagsUpsertWithoutArticle_tagInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutArticle_tagInput, tagsUpdateWithoutArticle_tagInput>, tagsUncheckedUpdateWithoutArticle_tagInput>
  }

  export type article_tagCreateNestedManyWithoutArticlesInput = {
    create?: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput> | article_tagCreateWithoutArticlesInput[] | article_tagUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutArticlesInput | article_tagCreateOrConnectWithoutArticlesInput[]
    createMany?: article_tagCreateManyArticlesInputEnvelope
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
  }

  export type article_tagUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput> | article_tagCreateWithoutArticlesInput[] | article_tagUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutArticlesInput | article_tagCreateOrConnectWithoutArticlesInput[]
    createMany?: article_tagCreateManyArticlesInputEnvelope
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type article_tagUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput> | article_tagCreateWithoutArticlesInput[] | article_tagUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutArticlesInput | article_tagCreateOrConnectWithoutArticlesInput[]
    upsert?: article_tagUpsertWithWhereUniqueWithoutArticlesInput | article_tagUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: article_tagCreateManyArticlesInputEnvelope
    set?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    disconnect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    delete?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    update?: article_tagUpdateWithWhereUniqueWithoutArticlesInput | article_tagUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: article_tagUpdateManyWithWhereWithoutArticlesInput | article_tagUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
  }

  export type article_tagUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput> | article_tagCreateWithoutArticlesInput[] | article_tagUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutArticlesInput | article_tagCreateOrConnectWithoutArticlesInput[]
    upsert?: article_tagUpsertWithWhereUniqueWithoutArticlesInput | article_tagUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: article_tagCreateManyArticlesInputEnvelope
    set?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    disconnect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    delete?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    update?: article_tagUpdateWithWhereUniqueWithoutArticlesInput | article_tagUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: article_tagUpdateManyWithWhereWithoutArticlesInput | article_tagUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type article_tagCreateNestedManyWithoutTagsInput = {
    create?: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput> | article_tagCreateWithoutTagsInput[] | article_tagUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutTagsInput | article_tagCreateOrConnectWithoutTagsInput[]
    createMany?: article_tagCreateManyTagsInputEnvelope
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
  }

  export type article_tagUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput> | article_tagCreateWithoutTagsInput[] | article_tagUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutTagsInput | article_tagCreateOrConnectWithoutTagsInput[]
    createMany?: article_tagCreateManyTagsInputEnvelope
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
  }

  export type article_tagUpdateManyWithoutTagsNestedInput = {
    create?: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput> | article_tagCreateWithoutTagsInput[] | article_tagUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutTagsInput | article_tagCreateOrConnectWithoutTagsInput[]
    upsert?: article_tagUpsertWithWhereUniqueWithoutTagsInput | article_tagUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: article_tagCreateManyTagsInputEnvelope
    set?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    disconnect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    delete?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    update?: article_tagUpdateWithWhereUniqueWithoutTagsInput | article_tagUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: article_tagUpdateManyWithWhereWithoutTagsInput | article_tagUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
  }

  export type article_tagUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput> | article_tagCreateWithoutTagsInput[] | article_tagUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: article_tagCreateOrConnectWithoutTagsInput | article_tagCreateOrConnectWithoutTagsInput[]
    upsert?: article_tagUpsertWithWhereUniqueWithoutTagsInput | article_tagUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: article_tagCreateManyTagsInputEnvelope
    set?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    disconnect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    delete?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    connect?: article_tagWhereUniqueInput | article_tagWhereUniqueInput[]
    update?: article_tagUpdateWithWhereUniqueWithoutTagsInput | article_tagUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: article_tagUpdateManyWithWhereWithoutTagsInput | article_tagUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type articlesCreateWithoutArticle_tagInput = {
    id?: bigint | number
    title: string
    slug: string
    content: string
    content_detail: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type articlesUncheckedCreateWithoutArticle_tagInput = {
    id?: bigint | number
    title: string
    slug: string
    content: string
    content_detail: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type articlesCreateOrConnectWithoutArticle_tagInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutArticle_tagInput, articlesUncheckedCreateWithoutArticle_tagInput>
  }

  export type tagsCreateWithoutArticle_tagInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsUncheckedCreateWithoutArticle_tagInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsCreateOrConnectWithoutArticle_tagInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutArticle_tagInput, tagsUncheckedCreateWithoutArticle_tagInput>
  }

  export type articlesUpsertWithoutArticle_tagInput = {
    update: XOR<articlesUpdateWithoutArticle_tagInput, articlesUncheckedUpdateWithoutArticle_tagInput>
    create: XOR<articlesCreateWithoutArticle_tagInput, articlesUncheckedCreateWithoutArticle_tagInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutArticle_tagInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutArticle_tagInput, articlesUncheckedUpdateWithoutArticle_tagInput>
  }

  export type articlesUpdateWithoutArticle_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateWithoutArticle_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    content_detail?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUpsertWithoutArticle_tagInput = {
    update: XOR<tagsUpdateWithoutArticle_tagInput, tagsUncheckedUpdateWithoutArticle_tagInput>
    create: XOR<tagsCreateWithoutArticle_tagInput, tagsUncheckedCreateWithoutArticle_tagInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutArticle_tagInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutArticle_tagInput, tagsUncheckedUpdateWithoutArticle_tagInput>
  }

  export type tagsUpdateWithoutArticle_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateWithoutArticle_tagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagCreateWithoutArticlesInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tags: tagsCreateNestedOneWithoutArticle_tagInput
  }

  export type article_tagUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number
    tag_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagCreateOrConnectWithoutArticlesInput = {
    where: article_tagWhereUniqueInput
    create: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput>
  }

  export type article_tagCreateManyArticlesInputEnvelope = {
    data: article_tagCreateManyArticlesInput | article_tagCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type article_tagUpsertWithWhereUniqueWithoutArticlesInput = {
    where: article_tagWhereUniqueInput
    update: XOR<article_tagUpdateWithoutArticlesInput, article_tagUncheckedUpdateWithoutArticlesInput>
    create: XOR<article_tagCreateWithoutArticlesInput, article_tagUncheckedCreateWithoutArticlesInput>
  }

  export type article_tagUpdateWithWhereUniqueWithoutArticlesInput = {
    where: article_tagWhereUniqueInput
    data: XOR<article_tagUpdateWithoutArticlesInput, article_tagUncheckedUpdateWithoutArticlesInput>
  }

  export type article_tagUpdateManyWithWhereWithoutArticlesInput = {
    where: article_tagScalarWhereInput
    data: XOR<article_tagUpdateManyMutationInput, article_tagUncheckedUpdateManyWithoutArticlesInput>
  }

  export type article_tagScalarWhereInput = {
    AND?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
    OR?: article_tagScalarWhereInput[]
    NOT?: article_tagScalarWhereInput | article_tagScalarWhereInput[]
    id?: BigIntFilter<"article_tag"> | bigint | number
    article_id?: BigIntFilter<"article_tag"> | bigint | number
    tag_id?: BigIntFilter<"article_tag"> | bigint | number
    created_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tag"> | Date | string | null
  }

  export type article_tagCreateWithoutTagsInput = {
    id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    articles: articlesCreateNestedOneWithoutArticle_tagInput
  }

  export type article_tagUncheckedCreateWithoutTagsInput = {
    id?: bigint | number
    article_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagCreateOrConnectWithoutTagsInput = {
    where: article_tagWhereUniqueInput
    create: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput>
  }

  export type article_tagCreateManyTagsInputEnvelope = {
    data: article_tagCreateManyTagsInput | article_tagCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type article_tagUpsertWithWhereUniqueWithoutTagsInput = {
    where: article_tagWhereUniqueInput
    update: XOR<article_tagUpdateWithoutTagsInput, article_tagUncheckedUpdateWithoutTagsInput>
    create: XOR<article_tagCreateWithoutTagsInput, article_tagUncheckedCreateWithoutTagsInput>
  }

  export type article_tagUpdateWithWhereUniqueWithoutTagsInput = {
    where: article_tagWhereUniqueInput
    data: XOR<article_tagUpdateWithoutTagsInput, article_tagUncheckedUpdateWithoutTagsInput>
  }

  export type article_tagUpdateManyWithWhereWithoutTagsInput = {
    where: article_tagScalarWhereInput
    data: XOR<article_tagUpdateManyMutationInput, article_tagUncheckedUpdateManyWithoutTagsInput>
  }

  export type article_tagCreateManyArticlesInput = {
    id?: bigint | number
    tag_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: tagsUpdateOneRequiredWithoutArticle_tagNestedInput
  }

  export type article_tagUncheckedUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagUncheckedUpdateManyWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagCreateManyTagsInput = {
    id?: bigint | number
    article_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUpdateOneRequiredWithoutArticle_tagNestedInput
  }

  export type article_tagUncheckedUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagUncheckedUpdateManyWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}