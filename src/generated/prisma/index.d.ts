
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
 * Model Autors
 * 
 */
export type Autors = $Result.DefaultSelection<Prisma.$AutorsPayload>
/**
 * Model Customers
 * 
 */
export type Customers = $Result.DefaultSelection<Prisma.$CustomersPayload>
/**
 * Model Books
 * 
 */
export type Books = $Result.DefaultSelection<Prisma.$BooksPayload>
/**
 * Model Warehouses
 * 
 */
export type Warehouses = $Result.DefaultSelection<Prisma.$WarehousesPayload>
/**
 * Model BooksProducts
 * 
 */
export type BooksProducts = $Result.DefaultSelection<Prisma.$BooksProductsPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItems
 * 
 */
export type CartItems = $Result.DefaultSelection<Prisma.$CartItemsPayload>
/**
 * Model Invoices
 * 
 */
export type Invoices = $Result.DefaultSelection<Prisma.$InvoicesPayload>
/**
 * Model InvoiceItems
 * 
 */
export type InvoiceItems = $Result.DefaultSelection<Prisma.$InvoiceItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Autors
 * const autors = await prisma.autors.findMany()
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
   * // Fetch zero or more Autors
   * const autors = await prisma.autors.findMany()
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
   * `prisma.autors`: Exposes CRUD operations for the **Autors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autors.findMany()
    * ```
    */
  get autors(): Prisma.AutorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.BooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouses`: Exposes CRUD operations for the **Warehouses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouses.findMany()
    * ```
    */
  get warehouses(): Prisma.WarehousesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booksProducts`: Exposes CRUD operations for the **BooksProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BooksProducts
    * const booksProducts = await prisma.booksProducts.findMany()
    * ```
    */
  get booksProducts(): Prisma.BooksProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItems`: Exposes CRUD operations for the **CartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItems.findMany()
    * ```
    */
  get cartItems(): Prisma.CartItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **Invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.InvoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItems`: Exposes CRUD operations for the **InvoiceItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItems.findMany()
    * ```
    */
  get invoiceItems(): Prisma.InvoiceItemsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Autors: 'Autors',
    Customers: 'Customers',
    Books: 'Books',
    Warehouses: 'Warehouses',
    BooksProducts: 'BooksProducts',
    Cart: 'Cart',
    CartItems: 'CartItems',
    Invoices: 'Invoices',
    InvoiceItems: 'InvoiceItems'
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
      modelProps: "autors" | "customers" | "books" | "warehouses" | "booksProducts" | "cart" | "cartItems" | "invoices" | "invoiceItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Autors: {
        payload: Prisma.$AutorsPayload<ExtArgs>
        fields: Prisma.AutorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          findFirst: {
            args: Prisma.AutorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          findMany: {
            args: Prisma.AutorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>[]
          }
          create: {
            args: Prisma.AutorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          createMany: {
            args: Prisma.AutorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>[]
          }
          delete: {
            args: Prisma.AutorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          update: {
            args: Prisma.AutorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          deleteMany: {
            args: Prisma.AutorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>[]
          }
          upsert: {
            args: Prisma.AutorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorsPayload>
          }
          aggregate: {
            args: Prisma.AutorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutors>
          }
          groupBy: {
            args: Prisma.AutorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorsCountArgs<ExtArgs>
            result: $Utils.Optional<AutorsCountAggregateOutputType> | number
          }
        }
      }
      Customers: {
        payload: Prisma.$CustomersPayload<ExtArgs>
        fields: Prisma.CustomersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      Books: {
        payload: Prisma.$BooksPayload<ExtArgs>
        fields: Prisma.BooksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findFirst: {
            args: Prisma.BooksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findMany: {
            args: Prisma.BooksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          create: {
            args: Prisma.BooksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          createMany: {
            args: Prisma.BooksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BooksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          delete: {
            args: Prisma.BooksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          update: {
            args: Prisma.BooksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          deleteMany: {
            args: Prisma.BooksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BooksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          upsert: {
            args: Prisma.BooksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.BooksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      Warehouses: {
        payload: Prisma.$WarehousesPayload<ExtArgs>
        fields: Prisma.WarehousesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehousesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehousesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findFirst: {
            args: Prisma.WarehousesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehousesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findMany: {
            args: Prisma.WarehousesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          create: {
            args: Prisma.WarehousesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          createMany: {
            args: Prisma.WarehousesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehousesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          delete: {
            args: Prisma.WarehousesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          update: {
            args: Prisma.WarehousesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          deleteMany: {
            args: Prisma.WarehousesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehousesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehousesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          upsert: {
            args: Prisma.WarehousesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          aggregate: {
            args: Prisma.WarehousesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouses>
          }
          groupBy: {
            args: Prisma.WarehousesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehousesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehousesCountArgs<ExtArgs>
            result: $Utils.Optional<WarehousesCountAggregateOutputType> | number
          }
        }
      }
      BooksProducts: {
        payload: Prisma.$BooksProductsPayload<ExtArgs>
        fields: Prisma.BooksProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          findFirst: {
            args: Prisma.BooksProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          findMany: {
            args: Prisma.BooksProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>[]
          }
          create: {
            args: Prisma.BooksProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          createMany: {
            args: Prisma.BooksProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BooksProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>[]
          }
          delete: {
            args: Prisma.BooksProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          update: {
            args: Prisma.BooksProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          deleteMany: {
            args: Prisma.BooksProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BooksProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>[]
          }
          upsert: {
            args: Prisma.BooksProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksProductsPayload>
          }
          aggregate: {
            args: Prisma.BooksProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooksProducts>
          }
          groupBy: {
            args: Prisma.BooksProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksProductsCountArgs<ExtArgs>
            result: $Utils.Optional<BooksProductsCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItems: {
        payload: Prisma.$CartItemsPayload<ExtArgs>
        fields: Prisma.CartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findFirst: {
            args: Prisma.CartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findMany: {
            args: Prisma.CartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          create: {
            args: Prisma.CartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          createMany: {
            args: Prisma.CartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          delete: {
            args: Prisma.CartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          update: {
            args: Prisma.CartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          deleteMany: {
            args: Prisma.CartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          upsert: {
            args: Prisma.CartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          aggregate: {
            args: Prisma.CartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItems>
          }
          groupBy: {
            args: Prisma.CartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemsCountAggregateOutputType> | number
          }
        }
      }
      Invoices: {
        payload: Prisma.$InvoicesPayload<ExtArgs>
        fields: Prisma.InvoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findFirst: {
            args: Prisma.InvoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          findMany: {
            args: Prisma.InvoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          create: {
            args: Prisma.InvoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          createMany: {
            args: Prisma.InvoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          delete: {
            args: Prisma.InvoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          update: {
            args: Prisma.InvoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          deleteMany: {
            args: Prisma.InvoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>[]
          }
          upsert: {
            args: Prisma.InvoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.InvoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItems: {
        payload: Prisma.$InvoiceItemsPayload<ExtArgs>
        fields: Prisma.InvoiceItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          update: {
            args: Prisma.InvoiceItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemsPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItems>
          }
          groupBy: {
            args: Prisma.InvoiceItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemsCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemsCountAggregateOutputType> | number
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
    autors?: AutorsOmit
    customers?: CustomersOmit
    books?: BooksOmit
    warehouses?: WarehousesOmit
    booksProducts?: BooksProductsOmit
    cart?: CartOmit
    cartItems?: CartItemsOmit
    invoices?: InvoicesOmit
    invoiceItems?: InvoiceItemsOmit
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
   * Count Type AutorsCountOutputType
   */

  export type AutorsCountOutputType = {
    Books: number
  }

  export type AutorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | AutorsCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AutorsCountOutputType without action
   */
  export type AutorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorsCountOutputType
     */
    select?: AutorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorsCountOutputType without action
   */
  export type AutorsCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    Invoices: number
    Cart: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invoices?: boolean | CustomersCountOutputTypeCountInvoicesArgs
    Cart?: boolean | CustomersCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    BooksProducts: number
    CartItems: number
    InvoiceItems: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BooksProducts?: boolean | BooksCountOutputTypeCountBooksProductsArgs
    CartItems?: boolean | BooksCountOutputTypeCountCartItemsArgs
    InvoiceItems?: boolean | BooksCountOutputTypeCountInvoiceItemsArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBooksProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksProductsWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
  }


  /**
   * Count Type WarehousesCountOutputType
   */

  export type WarehousesCountOutputType = {
    BooksProducts: number
  }

  export type WarehousesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BooksProducts?: boolean | WarehousesCountOutputTypeCountBooksProductsArgs
  }

  // Custom InputTypes
  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehousesCountOutputType
     */
    select?: WarehousesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeCountBooksProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksProductsWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    CartItems: number
    Invoices: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CartItems?: boolean | CartCountOutputTypeCountCartItemsArgs
    Invoices?: boolean | CartCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    InvoiceItems: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceItems?: boolean | InvoicesCountOutputTypeCountInvoiceItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Autors
   */

  export type AggregateAutors = {
    _count: AutorsCountAggregateOutputType | null
    _min: AutorsMinAggregateOutputType | null
    _max: AutorsMaxAggregateOutputType | null
  }

  export type AutorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    birtdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    birtdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutorsCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    birtdate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutorsMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birtdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutorsMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birtdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutorsCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birtdate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to aggregate.
     */
    where?: AutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorsOrderByWithRelationInput | AutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorsMaxAggregateInputType
  }

  export type GetAutorsAggregateType<T extends AutorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAutors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutors[P]>
      : GetScalarType<T[P], AggregateAutors[P]>
  }




  export type AutorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorsWhereInput
    orderBy?: AutorsOrderByWithAggregationInput | AutorsOrderByWithAggregationInput[]
    by: AutorsScalarFieldEnum[] | AutorsScalarFieldEnum
    having?: AutorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorsCountAggregateInputType | true
    _min?: AutorsMinAggregateInputType
    _max?: AutorsMaxAggregateInputType
  }

  export type AutorsGroupByOutputType = {
    id: string
    name: string
    bio: string
    birtdate: Date
    createdAt: Date
    updatedAt: Date
    _count: AutorsCountAggregateOutputType | null
    _min: AutorsMinAggregateOutputType | null
    _max: AutorsMaxAggregateOutputType | null
  }

  type GetAutorsGroupByPayload<T extends AutorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorsGroupByOutputType[P]>
            : GetScalarType<T[P], AutorsGroupByOutputType[P]>
        }
      >
    >


  export type AutorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birtdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Books?: boolean | Autors$BooksArgs<ExtArgs>
    _count?: boolean | AutorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autors"]>

  export type AutorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birtdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["autors"]>

  export type AutorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birtdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["autors"]>

  export type AutorsSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    birtdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "birtdate" | "createdAt" | "updatedAt", ExtArgs["result"]["autors"]>
  export type AutorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | Autors$BooksArgs<ExtArgs>
    _count?: boolean | AutorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autors"
    objects: {
      Books: Prisma.$BooksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bio: string
      birtdate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["autors"]>
    composites: {}
  }

  type AutorsGetPayload<S extends boolean | null | undefined | AutorsDefaultArgs> = $Result.GetResult<Prisma.$AutorsPayload, S>

  type AutorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorsCountAggregateInputType | true
    }

  export interface AutorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autors'], meta: { name: 'Autors' } }
    /**
     * Find zero or one Autors that matches the filter.
     * @param {AutorsFindUniqueArgs} args - Arguments to find a Autors
     * @example
     * // Get one Autors
     * const autors = await prisma.autors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorsFindUniqueArgs>(args: SelectSubset<T, AutorsFindUniqueArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorsFindUniqueOrThrowArgs} args - Arguments to find a Autors
     * @example
     * // Get one Autors
     * const autors = await prisma.autors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorsFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsFindFirstArgs} args - Arguments to find a Autors
     * @example
     * // Get one Autors
     * const autors = await prisma.autors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorsFindFirstArgs>(args?: SelectSubset<T, AutorsFindFirstArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsFindFirstOrThrowArgs} args - Arguments to find a Autors
     * @example
     * // Get one Autors
     * const autors = await prisma.autors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorsFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autors.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorsWithIdOnly = await prisma.autors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorsFindManyArgs>(args?: SelectSubset<T, AutorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autors.
     * @param {AutorsCreateArgs} args - Arguments to create a Autors.
     * @example
     * // Create one Autors
     * const Autors = await prisma.autors.create({
     *   data: {
     *     // ... data to create a Autors
     *   }
     * })
     * 
     */
    create<T extends AutorsCreateArgs>(args: SelectSubset<T, AutorsCreateArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorsCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autors = await prisma.autors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorsCreateManyArgs>(args?: SelectSubset<T, AutorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorsCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autors = await prisma.autors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorsWithIdOnly = await prisma.autors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorsCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autors.
     * @param {AutorsDeleteArgs} args - Arguments to delete one Autors.
     * @example
     * // Delete one Autors
     * const Autors = await prisma.autors.delete({
     *   where: {
     *     // ... filter to delete one Autors
     *   }
     * })
     * 
     */
    delete<T extends AutorsDeleteArgs>(args: SelectSubset<T, AutorsDeleteArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autors.
     * @param {AutorsUpdateArgs} args - Arguments to update one Autors.
     * @example
     * // Update one Autors
     * const autors = await prisma.autors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorsUpdateArgs>(args: SelectSubset<T, AutorsUpdateArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorsDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorsDeleteManyArgs>(args?: SelectSubset<T, AutorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autors = await prisma.autors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorsUpdateManyArgs>(args: SelectSubset<T, AutorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorsUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autors = await prisma.autors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorsWithIdOnly = await prisma.autors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorsUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autors.
     * @param {AutorsUpsertArgs} args - Arguments to update or create a Autors.
     * @example
     * // Update or create a Autors
     * const autors = await prisma.autors.upsert({
     *   create: {
     *     // ... data to create a Autors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autors we want to update
     *   }
     * })
     */
    upsert<T extends AutorsUpsertArgs>(args: SelectSubset<T, AutorsUpsertArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autors.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorsCountArgs>(
      args?: Subset<T, AutorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorsAggregateArgs>(args: Subset<T, AutorsAggregateArgs>): Prisma.PrismaPromise<GetAutorsAggregateType<T>>

    /**
     * Group by Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorsGroupByArgs} args - Group by arguments.
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
      T extends AutorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorsGroupByArgs['orderBy'] }
        : { orderBy?: AutorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autors model
   */
  readonly fields: AutorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Books<T extends Autors$BooksArgs<ExtArgs> = {}>(args?: Subset<T, Autors$BooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Autors model
   */
  interface AutorsFieldRefs {
    readonly id: FieldRef<"Autors", 'String'>
    readonly name: FieldRef<"Autors", 'String'>
    readonly bio: FieldRef<"Autors", 'String'>
    readonly birtdate: FieldRef<"Autors", 'DateTime'>
    readonly createdAt: FieldRef<"Autors", 'DateTime'>
    readonly updatedAt: FieldRef<"Autors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Autors findUnique
   */
  export type AutorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where: AutorsWhereUniqueInput
  }

  /**
   * Autors findUniqueOrThrow
   */
  export type AutorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where: AutorsWhereUniqueInput
  }

  /**
   * Autors findFirst
   */
  export type AutorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorsOrderByWithRelationInput | AutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorsScalarFieldEnum | AutorsScalarFieldEnum[]
  }

  /**
   * Autors findFirstOrThrow
   */
  export type AutorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorsOrderByWithRelationInput | AutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorsScalarFieldEnum | AutorsScalarFieldEnum[]
  }

  /**
   * Autors findMany
   */
  export type AutorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorsOrderByWithRelationInput | AutorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    distinct?: AutorsScalarFieldEnum | AutorsScalarFieldEnum[]
  }

  /**
   * Autors create
   */
  export type AutorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Autors.
     */
    data: XOR<AutorsCreateInput, AutorsUncheckedCreateInput>
  }

  /**
   * Autors createMany
   */
  export type AutorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorsCreateManyInput | AutorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autors createManyAndReturn
   */
  export type AutorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorsCreateManyInput | AutorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autors update
   */
  export type AutorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Autors.
     */
    data: XOR<AutorsUpdateInput, AutorsUncheckedUpdateInput>
    /**
     * Choose, which Autors to update.
     */
    where: AutorsWhereUniqueInput
  }

  /**
   * Autors updateMany
   */
  export type AutorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorsUpdateManyMutationInput, AutorsUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorsWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autors updateManyAndReturn
   */
  export type AutorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorsUpdateManyMutationInput, AutorsUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorsWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autors upsert
   */
  export type AutorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Autors to update in case it exists.
     */
    where: AutorsWhereUniqueInput
    /**
     * In case the Autors found by the `where` argument doesn't exist, create a new Autors with this data.
     */
    create: XOR<AutorsCreateInput, AutorsUncheckedCreateInput>
    /**
     * In case the Autors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorsUpdateInput, AutorsUncheckedUpdateInput>
  }

  /**
   * Autors delete
   */
  export type AutorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
    /**
     * Filter which Autors to delete.
     */
    where: AutorsWhereUniqueInput
  }

  /**
   * Autors deleteMany
   */
  export type AutorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorsWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autors.Books
   */
  export type Autors$BooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    cursor?: BooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Autors without action
   */
  export type AutorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autors
     */
    select?: AutorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autors
     */
    omit?: AutorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorsInclude<ExtArgs> | null
  }


  /**
   * Model Customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: CustomersOrderByWithAggregationInput | CustomersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Invoices?: boolean | Customers$InvoicesArgs<ExtArgs>
    Cart?: boolean | Customers$CartArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["customers"]>
  export type CustomersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invoices?: boolean | Customers$InvoicesArgs<ExtArgs>
    Cart?: boolean | Customers$CartArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customers"
    objects: {
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
      Cart: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type CustomersGetPayload<S extends boolean | null | undefined | CustomersDefaultArgs> = $Result.GetResult<Prisma.$CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomersFindUniqueArgs>(args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomersFindFirstArgs>(args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomersFindManyArgs>(args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends CustomersCreateArgs>(args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomersCreateManyArgs>(args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomersCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends CustomersDeleteArgs>(args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomersUpdateArgs>(args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomersDeleteManyArgs>(args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomersUpdateManyArgs>(args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomersUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends CustomersUpsertArgs>(args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
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
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customers model
   */
  readonly fields: CustomersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Invoices<T extends Customers$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Customers$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cart<T extends Customers$CartArgs<ExtArgs> = {}>(args?: Subset<T, Customers$CartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customers model
   */
  interface CustomersFieldRefs {
    readonly id: FieldRef<"Customers", 'String'>
    readonly name: FieldRef<"Customers", 'String'>
    readonly email: FieldRef<"Customers", 'String'>
    readonly password: FieldRef<"Customers", 'String'>
    readonly address: FieldRef<"Customers", 'String'>
    readonly createdAt: FieldRef<"Customers", 'DateTime'>
    readonly updatedAt: FieldRef<"Customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customers findUnique
   */
  export type CustomersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findFirst
   */
  export type CustomersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }

  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers createManyAndReturn
   */
  export type CustomersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customers updateManyAndReturn
   */
  export type CustomersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }

  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customers.Invoices
   */
  export type Customers$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Customers.Cart
   */
  export type Customers$CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Customers without action
   */
  export type CustomersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customers
     */
    omit?: CustomersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
  }


  /**
   * Model Books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    publicationYear: number | null
  }

  export type BooksSumAggregateOutputType = {
    publicationYear: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: string | null
    title: string | null
    isbn: string | null
    publicationYear: number | null
    genre: string | null
    authorID: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isbn: string | null
    publicationYear: number | null
    genre: string | null
    authorID: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    isbn: number
    publicationYear: number
    genre: number
    authorID: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    publicationYear?: true
  }

  export type BooksSumAggregateInputType = {
    publicationYear?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publicationYear?: true
    genre?: true
    authorID?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publicationYear?: true
    genre?: true
    authorID?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publicationYear?: true
    genre?: true
    authorID?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to aggregate.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type BooksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithAggregationInput | BooksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: BooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type BooksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publicationYear?: boolean
    genre?: boolean
    authorID?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AutorsDefaultArgs<ExtArgs>
    BooksProducts?: boolean | Books$BooksProductsArgs<ExtArgs>
    CartItems?: boolean | Books$CartItemsArgs<ExtArgs>
    InvoiceItems?: boolean | Books$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publicationYear?: boolean
    genre?: boolean
    authorID?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publicationYear?: boolean
    genre?: boolean
    authorID?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | AutorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectScalar = {
    id?: boolean
    title?: boolean
    isbn?: boolean
    publicationYear?: boolean
    genre?: boolean
    authorID?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BooksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isbn" | "publicationYear" | "genre" | "authorID" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["books"]>
  export type BooksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AutorsDefaultArgs<ExtArgs>
    BooksProducts?: boolean | Books$BooksProductsArgs<ExtArgs>
    CartItems?: boolean | Books$CartItemsArgs<ExtArgs>
    InvoiceItems?: boolean | Books$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BooksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AutorsDefaultArgs<ExtArgs>
  }
  export type BooksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AutorsDefaultArgs<ExtArgs>
  }

  export type $BooksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Books"
    objects: {
      author: Prisma.$AutorsPayload<ExtArgs>
      BooksProducts: Prisma.$BooksProductsPayload<ExtArgs>[]
      CartItems: Prisma.$CartItemsPayload<ExtArgs>[]
      InvoiceItems: Prisma.$InvoiceItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isbn: string
      publicationYear: number
      genre: string
      authorID: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type BooksGetPayload<S extends boolean | null | undefined | BooksDefaultArgs> = $Result.GetResult<Prisma.$BooksPayload, S>

  type BooksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface BooksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Books'], meta: { name: 'Books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksFindUniqueArgs>(args: SelectSubset<T, BooksFindUniqueArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksFindFirstArgs>(args?: SelectSubset<T, BooksFindFirstArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BooksFindManyArgs>(args?: SelectSubset<T, BooksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends BooksCreateArgs>(args: SelectSubset<T, BooksCreateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BooksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksCreateManyArgs>(args?: SelectSubset<T, BooksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BooksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BooksCreateManyAndReturnArgs>(args?: SelectSubset<T, BooksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends BooksDeleteArgs>(args: SelectSubset<T, BooksDeleteArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksUpdateArgs>(args: SelectSubset<T, BooksUpdateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksDeleteManyArgs>(args?: SelectSubset<T, BooksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksUpdateManyArgs>(args: SelectSubset<T, BooksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BooksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BooksUpdateManyAndReturnArgs>(args: SelectSubset<T, BooksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends BooksUpsertArgs>(args: SelectSubset<T, BooksUpsertArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
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
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Books model
   */
  readonly fields: BooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AutorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutorsDefaultArgs<ExtArgs>>): Prisma__AutorsClient<$Result.GetResult<Prisma.$AutorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    BooksProducts<T extends Books$BooksProductsArgs<ExtArgs> = {}>(args?: Subset<T, Books$BooksProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CartItems<T extends Books$CartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Books$CartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InvoiceItems<T extends Books$InvoiceItemsArgs<ExtArgs> = {}>(args?: Subset<T, Books$InvoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Books model
   */
  interface BooksFieldRefs {
    readonly id: FieldRef<"Books", 'String'>
    readonly title: FieldRef<"Books", 'String'>
    readonly isbn: FieldRef<"Books", 'String'>
    readonly publicationYear: FieldRef<"Books", 'Int'>
    readonly genre: FieldRef<"Books", 'String'>
    readonly authorID: FieldRef<"Books", 'String'>
    readonly status: FieldRef<"Books", 'String'>
    readonly createdAt: FieldRef<"Books", 'DateTime'>
    readonly updatedAt: FieldRef<"Books", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Books findUnique
   */
  export type BooksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findFirst
   */
  export type BooksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findMany
   */
  export type BooksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books create
   */
  export type BooksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to create a Books.
     */
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>
  }

  /**
   * Books createMany
   */
  export type BooksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Books createManyAndReturn
   */
  export type BooksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books update
   */
  export type BooksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to update a Books.
     */
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
    /**
     * Choose, which Books to update.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Books updateManyAndReturn
   */
  export type BooksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books upsert
   */
  export type BooksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The filter to search for the Books to update in case it exists.
     */
    where: BooksWhereUniqueInput
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     */
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
  }

  /**
   * Books delete
   */
  export type BooksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter which Books to delete.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Books.BooksProducts
   */
  export type Books$BooksProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    where?: BooksProductsWhereInput
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    cursor?: BooksProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksProductsScalarFieldEnum | BooksProductsScalarFieldEnum[]
  }

  /**
   * Books.CartItems
   */
  export type Books$CartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Books.InvoiceItems
   */
  export type Books$InvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    cursor?: InvoiceItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * Books without action
   */
  export type BooksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
  }


  /**
   * Model Warehouses
   */

  export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  export type WarehousesMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    location: string | null
    capacity: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehousesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    location: string | null
    capacity: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WarehousesCountAggregateOutputType = {
    id: number
    name: number
    address: number
    location: number
    capacity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WarehousesMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    location?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehousesMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    location?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WarehousesCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    location?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WarehousesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to aggregate.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehousesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehousesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehousesMaxAggregateInputType
  }

  export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouses[P]>
      : GetScalarType<T[P], AggregateWarehouses[P]>
  }




  export type WarehousesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehousesWhereInput
    orderBy?: WarehousesOrderByWithAggregationInput | WarehousesOrderByWithAggregationInput[]
    by: WarehousesScalarFieldEnum[] | WarehousesScalarFieldEnum
    having?: WarehousesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehousesCountAggregateInputType | true
    _min?: WarehousesMinAggregateInputType
    _max?: WarehousesMaxAggregateInputType
  }

  export type WarehousesGroupByOutputType = {
    id: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt: Date
    updatedAt: Date
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  type GetWarehousesGroupByPayload<T extends WarehousesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehousesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
            : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
        }
      >
    >


  export type WarehousesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    location?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    BooksProducts?: boolean | Warehouses$BooksProductsArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    location?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    location?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    location?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WarehousesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "location" | "capacity" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouses"]>
  export type WarehousesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    BooksProducts?: boolean | Warehouses$BooksProductsArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehousesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarehousesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouses"
    objects: {
      BooksProducts: Prisma.$BooksProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      location: string
      capacity: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["warehouses"]>
    composites: {}
  }

  type WarehousesGetPayload<S extends boolean | null | undefined | WarehousesDefaultArgs> = $Result.GetResult<Prisma.$WarehousesPayload, S>

  type WarehousesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehousesCountAggregateInputType | true
    }

  export interface WarehousesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouses'], meta: { name: 'Warehouses' } }
    /**
     * Find zero or one Warehouses that matches the filter.
     * @param {WarehousesFindUniqueArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehousesFindUniqueArgs>(args: SelectSubset<T, WarehousesFindUniqueArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehousesFindUniqueOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehousesFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehousesFindFirstArgs>(args?: SelectSubset<T, WarehousesFindFirstArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehousesFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouses.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehousesFindManyArgs>(args?: SelectSubset<T, WarehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouses.
     * @param {WarehousesCreateArgs} args - Arguments to create a Warehouses.
     * @example
     * // Create one Warehouses
     * const Warehouses = await prisma.warehouses.create({
     *   data: {
     *     // ... data to create a Warehouses
     *   }
     * })
     * 
     */
    create<T extends WarehousesCreateArgs>(args: SelectSubset<T, WarehousesCreateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehousesCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehousesCreateManyArgs>(args?: SelectSubset<T, WarehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehousesCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehousesCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouses.
     * @param {WarehousesDeleteArgs} args - Arguments to delete one Warehouses.
     * @example
     * // Delete one Warehouses
     * const Warehouses = await prisma.warehouses.delete({
     *   where: {
     *     // ... filter to delete one Warehouses
     *   }
     * })
     * 
     */
    delete<T extends WarehousesDeleteArgs>(args: SelectSubset<T, WarehousesDeleteArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouses.
     * @param {WarehousesUpdateArgs} args - Arguments to update one Warehouses.
     * @example
     * // Update one Warehouses
     * const warehouses = await prisma.warehouses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehousesUpdateArgs>(args: SelectSubset<T, WarehousesUpdateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehousesDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehousesDeleteManyArgs>(args?: SelectSubset<T, WarehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehousesUpdateManyArgs>(args: SelectSubset<T, WarehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehousesUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehousesUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouses.
     * @param {WarehousesUpsertArgs} args - Arguments to update or create a Warehouses.
     * @example
     * // Update or create a Warehouses
     * const warehouses = await prisma.warehouses.upsert({
     *   create: {
     *     // ... data to create a Warehouses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouses we want to update
     *   }
     * })
     */
    upsert<T extends WarehousesUpsertArgs>(args: SelectSubset<T, WarehousesUpsertArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouses.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehousesCountArgs>(
      args?: Subset<T, WarehousesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehousesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehousesAggregateArgs>(args: Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>

    /**
     * Group by Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesGroupByArgs} args - Group by arguments.
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
      T extends WarehousesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehousesGroupByArgs['orderBy'] }
        : { orderBy?: WarehousesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouses model
   */
  readonly fields: WarehousesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehousesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    BooksProducts<T extends Warehouses$BooksProductsArgs<ExtArgs> = {}>(args?: Subset<T, Warehouses$BooksProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouses model
   */
  interface WarehousesFieldRefs {
    readonly id: FieldRef<"Warehouses", 'String'>
    readonly name: FieldRef<"Warehouses", 'String'>
    readonly address: FieldRef<"Warehouses", 'String'>
    readonly location: FieldRef<"Warehouses", 'String'>
    readonly capacity: FieldRef<"Warehouses", 'String'>
    readonly createdAt: FieldRef<"Warehouses", 'DateTime'>
    readonly updatedAt: FieldRef<"Warehouses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouses findUnique
   */
  export type WarehousesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findUniqueOrThrow
   */
  export type WarehousesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findFirst
   */
  export type WarehousesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findFirstOrThrow
   */
  export type WarehousesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findMany
   */
  export type WarehousesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses create
   */
  export type WarehousesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouses.
     */
    data: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
  }

  /**
   * Warehouses createMany
   */
  export type WarehousesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses createManyAndReturn
   */
  export type WarehousesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses update
   */
  export type WarehousesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouses.
     */
    data: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
    /**
     * Choose, which Warehouses to update.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses updateMany
   */
  export type WarehousesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses updateManyAndReturn
   */
  export type WarehousesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses upsert
   */
  export type WarehousesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouses to update in case it exists.
     */
    where: WarehousesWhereUniqueInput
    /**
     * In case the Warehouses found by the `where` argument doesn't exist, create a new Warehouses with this data.
     */
    create: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
    /**
     * In case the Warehouses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
  }

  /**
   * Warehouses delete
   */
  export type WarehousesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter which Warehouses to delete.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses deleteMany
   */
  export type WarehousesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouses.BooksProducts
   */
  export type Warehouses$BooksProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    where?: BooksProductsWhereInput
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    cursor?: BooksProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksProductsScalarFieldEnum | BooksProductsScalarFieldEnum[]
  }

  /**
   * Warehouses without action
   */
  export type WarehousesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
  }


  /**
   * Model BooksProducts
   */

  export type AggregateBooksProducts = {
    _count: BooksProductsCountAggregateOutputType | null
    _avg: BooksProductsAvgAggregateOutputType | null
    _sum: BooksProductsSumAggregateOutputType | null
    _min: BooksProductsMinAggregateOutputType | null
    _max: BooksProductsMaxAggregateOutputType | null
  }

  export type BooksProductsAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type BooksProductsSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type BooksProductsMinAggregateOutputType = {
    id: string | null
    bookID: string | null
    price: number | null
    stock: number | null
    format: string | null
    warehouseID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksProductsMaxAggregateOutputType = {
    id: string | null
    bookID: string | null
    price: number | null
    stock: number | null
    format: string | null
    warehouseID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksProductsCountAggregateOutputType = {
    id: number
    bookID: number
    price: number
    stock: number
    format: number
    warehouseID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BooksProductsAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type BooksProductsSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type BooksProductsMinAggregateInputType = {
    id?: true
    bookID?: true
    price?: true
    stock?: true
    format?: true
    warehouseID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksProductsMaxAggregateInputType = {
    id?: true
    bookID?: true
    price?: true
    stock?: true
    format?: true
    warehouseID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksProductsCountAggregateInputType = {
    id?: true
    bookID?: true
    price?: true
    stock?: true
    format?: true
    warehouseID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BooksProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksProducts to aggregate.
     */
    where?: BooksProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksProducts to fetch.
     */
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BooksProducts
    **/
    _count?: true | BooksProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksProductsMaxAggregateInputType
  }

  export type GetBooksProductsAggregateType<T extends BooksProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooksProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooksProducts[P]>
      : GetScalarType<T[P], AggregateBooksProducts[P]>
  }




  export type BooksProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksProductsWhereInput
    orderBy?: BooksProductsOrderByWithAggregationInput | BooksProductsOrderByWithAggregationInput[]
    by: BooksProductsScalarFieldEnum[] | BooksProductsScalarFieldEnum
    having?: BooksProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksProductsCountAggregateInputType | true
    _avg?: BooksProductsAvgAggregateInputType
    _sum?: BooksProductsSumAggregateInputType
    _min?: BooksProductsMinAggregateInputType
    _max?: BooksProductsMaxAggregateInputType
  }

  export type BooksProductsGroupByOutputType = {
    id: string
    bookID: string
    price: number
    stock: number
    format: string
    warehouseID: string
    createdAt: Date
    updatedAt: Date
    _count: BooksProductsCountAggregateOutputType | null
    _avg: BooksProductsAvgAggregateOutputType | null
    _sum: BooksProductsSumAggregateOutputType | null
    _min: BooksProductsMinAggregateOutputType | null
    _max: BooksProductsMaxAggregateOutputType | null
  }

  type GetBooksProductsGroupByPayload<T extends BooksProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksProductsGroupByOutputType[P]>
            : GetScalarType<T[P], BooksProductsGroupByOutputType[P]>
        }
      >
    >


  export type BooksProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouseID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["booksProducts"]>

  export type BooksProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouseID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["booksProducts"]>

  export type BooksProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouseID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["booksProducts"]>

  export type BooksProductsSelectScalar = {
    id?: boolean
    bookID?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouseID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BooksProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookID" | "price" | "stock" | "format" | "warehouseID" | "createdAt" | "updatedAt", ExtArgs["result"]["booksProducts"]>
  export type BooksProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }
  export type BooksProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }
  export type BooksProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    warehouse?: boolean | BooksProducts$warehouseArgs<ExtArgs>
  }

  export type $BooksProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BooksProducts"
    objects: {
      book: Prisma.$BooksPayload<ExtArgs>
      warehouse: Prisma.$WarehousesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookID: string
      price: number
      stock: number
      format: string
      warehouseID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booksProducts"]>
    composites: {}
  }

  type BooksProductsGetPayload<S extends boolean | null | undefined | BooksProductsDefaultArgs> = $Result.GetResult<Prisma.$BooksProductsPayload, S>

  type BooksProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksProductsCountAggregateInputType | true
    }

  export interface BooksProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BooksProducts'], meta: { name: 'BooksProducts' } }
    /**
     * Find zero or one BooksProducts that matches the filter.
     * @param {BooksProductsFindUniqueArgs} args - Arguments to find a BooksProducts
     * @example
     * // Get one BooksProducts
     * const booksProducts = await prisma.booksProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksProductsFindUniqueArgs>(args: SelectSubset<T, BooksProductsFindUniqueArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BooksProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksProductsFindUniqueOrThrowArgs} args - Arguments to find a BooksProducts
     * @example
     * // Get one BooksProducts
     * const booksProducts = await prisma.booksProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsFindFirstArgs} args - Arguments to find a BooksProducts
     * @example
     * // Get one BooksProducts
     * const booksProducts = await prisma.booksProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksProductsFindFirstArgs>(args?: SelectSubset<T, BooksProductsFindFirstArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsFindFirstOrThrowArgs} args - Arguments to find a BooksProducts
     * @example
     * // Get one BooksProducts
     * const booksProducts = await prisma.booksProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BooksProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BooksProducts
     * const booksProducts = await prisma.booksProducts.findMany()
     * 
     * // Get first 10 BooksProducts
     * const booksProducts = await prisma.booksProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksProductsWithIdOnly = await prisma.booksProducts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BooksProductsFindManyArgs>(args?: SelectSubset<T, BooksProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BooksProducts.
     * @param {BooksProductsCreateArgs} args - Arguments to create a BooksProducts.
     * @example
     * // Create one BooksProducts
     * const BooksProducts = await prisma.booksProducts.create({
     *   data: {
     *     // ... data to create a BooksProducts
     *   }
     * })
     * 
     */
    create<T extends BooksProductsCreateArgs>(args: SelectSubset<T, BooksProductsCreateArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BooksProducts.
     * @param {BooksProductsCreateManyArgs} args - Arguments to create many BooksProducts.
     * @example
     * // Create many BooksProducts
     * const booksProducts = await prisma.booksProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksProductsCreateManyArgs>(args?: SelectSubset<T, BooksProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BooksProducts and returns the data saved in the database.
     * @param {BooksProductsCreateManyAndReturnArgs} args - Arguments to create many BooksProducts.
     * @example
     * // Create many BooksProducts
     * const booksProducts = await prisma.booksProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BooksProducts and only return the `id`
     * const booksProductsWithIdOnly = await prisma.booksProducts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BooksProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, BooksProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BooksProducts.
     * @param {BooksProductsDeleteArgs} args - Arguments to delete one BooksProducts.
     * @example
     * // Delete one BooksProducts
     * const BooksProducts = await prisma.booksProducts.delete({
     *   where: {
     *     // ... filter to delete one BooksProducts
     *   }
     * })
     * 
     */
    delete<T extends BooksProductsDeleteArgs>(args: SelectSubset<T, BooksProductsDeleteArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BooksProducts.
     * @param {BooksProductsUpdateArgs} args - Arguments to update one BooksProducts.
     * @example
     * // Update one BooksProducts
     * const booksProducts = await prisma.booksProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksProductsUpdateArgs>(args: SelectSubset<T, BooksProductsUpdateArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BooksProducts.
     * @param {BooksProductsDeleteManyArgs} args - Arguments to filter BooksProducts to delete.
     * @example
     * // Delete a few BooksProducts
     * const { count } = await prisma.booksProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksProductsDeleteManyArgs>(args?: SelectSubset<T, BooksProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BooksProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BooksProducts
     * const booksProducts = await prisma.booksProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksProductsUpdateManyArgs>(args: SelectSubset<T, BooksProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BooksProducts and returns the data updated in the database.
     * @param {BooksProductsUpdateManyAndReturnArgs} args - Arguments to update many BooksProducts.
     * @example
     * // Update many BooksProducts
     * const booksProducts = await prisma.booksProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BooksProducts and only return the `id`
     * const booksProductsWithIdOnly = await prisma.booksProducts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BooksProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, BooksProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BooksProducts.
     * @param {BooksProductsUpsertArgs} args - Arguments to update or create a BooksProducts.
     * @example
     * // Update or create a BooksProducts
     * const booksProducts = await prisma.booksProducts.upsert({
     *   create: {
     *     // ... data to create a BooksProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BooksProducts we want to update
     *   }
     * })
     */
    upsert<T extends BooksProductsUpsertArgs>(args: SelectSubset<T, BooksProductsUpsertArgs<ExtArgs>>): Prisma__BooksProductsClient<$Result.GetResult<Prisma.$BooksProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BooksProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsCountArgs} args - Arguments to filter BooksProducts to count.
     * @example
     * // Count the number of BooksProducts
     * const count = await prisma.booksProducts.count({
     *   where: {
     *     // ... the filter for the BooksProducts we want to count
     *   }
     * })
    **/
    count<T extends BooksProductsCountArgs>(
      args?: Subset<T, BooksProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BooksProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksProductsAggregateArgs>(args: Subset<T, BooksProductsAggregateArgs>): Prisma.PrismaPromise<GetBooksProductsAggregateType<T>>

    /**
     * Group by BooksProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksProductsGroupByArgs} args - Group by arguments.
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
      T extends BooksProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksProductsGroupByArgs['orderBy'] }
        : { orderBy?: BooksProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BooksProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BooksProducts model
   */
  readonly fields: BooksProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BooksProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends BooksProducts$warehouseArgs<ExtArgs> = {}>(args?: Subset<T, BooksProducts$warehouseArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BooksProducts model
   */
  interface BooksProductsFieldRefs {
    readonly id: FieldRef<"BooksProducts", 'String'>
    readonly bookID: FieldRef<"BooksProducts", 'String'>
    readonly price: FieldRef<"BooksProducts", 'Float'>
    readonly stock: FieldRef<"BooksProducts", 'Int'>
    readonly format: FieldRef<"BooksProducts", 'String'>
    readonly warehouseID: FieldRef<"BooksProducts", 'String'>
    readonly createdAt: FieldRef<"BooksProducts", 'DateTime'>
    readonly updatedAt: FieldRef<"BooksProducts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BooksProducts findUnique
   */
  export type BooksProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter, which BooksProducts to fetch.
     */
    where: BooksProductsWhereUniqueInput
  }

  /**
   * BooksProducts findUniqueOrThrow
   */
  export type BooksProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter, which BooksProducts to fetch.
     */
    where: BooksProductsWhereUniqueInput
  }

  /**
   * BooksProducts findFirst
   */
  export type BooksProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter, which BooksProducts to fetch.
     */
    where?: BooksProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksProducts to fetch.
     */
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksProducts.
     */
    cursor?: BooksProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksProducts.
     */
    distinct?: BooksProductsScalarFieldEnum | BooksProductsScalarFieldEnum[]
  }

  /**
   * BooksProducts findFirstOrThrow
   */
  export type BooksProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter, which BooksProducts to fetch.
     */
    where?: BooksProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksProducts to fetch.
     */
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksProducts.
     */
    cursor?: BooksProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksProducts.
     */
    distinct?: BooksProductsScalarFieldEnum | BooksProductsScalarFieldEnum[]
  }

  /**
   * BooksProducts findMany
   */
  export type BooksProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter, which BooksProducts to fetch.
     */
    where?: BooksProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksProducts to fetch.
     */
    orderBy?: BooksProductsOrderByWithRelationInput | BooksProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BooksProducts.
     */
    cursor?: BooksProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksProducts.
     */
    skip?: number
    distinct?: BooksProductsScalarFieldEnum | BooksProductsScalarFieldEnum[]
  }

  /**
   * BooksProducts create
   */
  export type BooksProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a BooksProducts.
     */
    data: XOR<BooksProductsCreateInput, BooksProductsUncheckedCreateInput>
  }

  /**
   * BooksProducts createMany
   */
  export type BooksProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BooksProducts.
     */
    data: BooksProductsCreateManyInput | BooksProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BooksProducts createManyAndReturn
   */
  export type BooksProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * The data used to create many BooksProducts.
     */
    data: BooksProductsCreateManyInput | BooksProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BooksProducts update
   */
  export type BooksProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a BooksProducts.
     */
    data: XOR<BooksProductsUpdateInput, BooksProductsUncheckedUpdateInput>
    /**
     * Choose, which BooksProducts to update.
     */
    where: BooksProductsWhereUniqueInput
  }

  /**
   * BooksProducts updateMany
   */
  export type BooksProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BooksProducts.
     */
    data: XOR<BooksProductsUpdateManyMutationInput, BooksProductsUncheckedUpdateManyInput>
    /**
     * Filter which BooksProducts to update
     */
    where?: BooksProductsWhereInput
    /**
     * Limit how many BooksProducts to update.
     */
    limit?: number
  }

  /**
   * BooksProducts updateManyAndReturn
   */
  export type BooksProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * The data used to update BooksProducts.
     */
    data: XOR<BooksProductsUpdateManyMutationInput, BooksProductsUncheckedUpdateManyInput>
    /**
     * Filter which BooksProducts to update
     */
    where?: BooksProductsWhereInput
    /**
     * Limit how many BooksProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BooksProducts upsert
   */
  export type BooksProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the BooksProducts to update in case it exists.
     */
    where: BooksProductsWhereUniqueInput
    /**
     * In case the BooksProducts found by the `where` argument doesn't exist, create a new BooksProducts with this data.
     */
    create: XOR<BooksProductsCreateInput, BooksProductsUncheckedCreateInput>
    /**
     * In case the BooksProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksProductsUpdateInput, BooksProductsUncheckedUpdateInput>
  }

  /**
   * BooksProducts delete
   */
  export type BooksProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
    /**
     * Filter which BooksProducts to delete.
     */
    where: BooksProductsWhereUniqueInput
  }

  /**
   * BooksProducts deleteMany
   */
  export type BooksProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksProducts to delete
     */
    where?: BooksProductsWhereInput
    /**
     * Limit how many BooksProducts to delete.
     */
    limit?: number
  }

  /**
   * BooksProducts.warehouse
   */
  export type BooksProducts$warehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    where?: WarehousesWhereInput
  }

  /**
   * BooksProducts without action
   */
  export type BooksProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksProducts
     */
    select?: BooksProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksProducts
     */
    omit?: BooksProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksProductsInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    customerID: string | null
    createdAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    customerID: string | null
    createdAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    customerID: number
    createdAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    customerID?: true
    createdAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    customerID?: true
    createdAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    customerID?: true
    createdAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    customerID: string
    createdAt: Date
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    createdAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    CartItems?: boolean | Cart$CartItemsArgs<ExtArgs>
    Invoices?: boolean | Cart$InvoicesArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    createdAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerID?: boolean
    createdAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    customerID?: boolean
    createdAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerID" | "createdAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    CartItems?: boolean | Cart$CartItemsArgs<ExtArgs>
    Invoices?: boolean | Cart$InvoicesArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
      CartItems: Prisma.$CartItemsPayload<ExtArgs>[]
      Invoices: Prisma.$InvoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerID: string
      createdAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CartItems<T extends Cart$CartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$CartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invoices<T extends Cart$InvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Cart$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly customerID: FieldRef<"Cart", 'String'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.CartItems
   */
  export type Cart$CartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Cart.Invoices
   */
  export type Cart$InvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    cursor?: InvoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItems
   */

  export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  export type CartItemsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemsSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemsMinAggregateOutputType = {
    id: string | null
    cartID: string | null
    bookID: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type CartItemsMaxAggregateOutputType = {
    id: string | null
    cartID: string | null
    bookID: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type CartItemsCountAggregateOutputType = {
    id: number
    cartID: number
    bookID: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type CartItemsAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemsSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemsMinAggregateInputType = {
    id?: true
    cartID?: true
    bookID?: true
    quantity?: true
    createdAt?: true
  }

  export type CartItemsMaxAggregateInputType = {
    id?: true
    cartID?: true
    bookID?: true
    quantity?: true
    createdAt?: true
  }

  export type CartItemsCountAggregateInputType = {
    id?: true
    cartID?: true
    bookID?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type CartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to aggregate.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemsMaxAggregateInputType
  }

  export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItems[P]>
      : GetScalarType<T[P], AggregateCartItems[P]>
  }




  export type CartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithAggregationInput | CartItemsOrderByWithAggregationInput[]
    by: CartItemsScalarFieldEnum[] | CartItemsScalarFieldEnum
    having?: CartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemsCountAggregateInputType | true
    _avg?: CartItemsAvgAggregateInputType
    _sum?: CartItemsSumAggregateInputType
    _min?: CartItemsMinAggregateInputType
    _max?: CartItemsMaxAggregateInputType
  }

  export type CartItemsGroupByOutputType = {
    id: string
    cartID: string
    bookID: string
    quantity: number
    createdAt: Date
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  type GetCartItemsGroupByPayload<T extends CartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
        }
      >
    >


  export type CartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartID?: boolean
    bookID?: boolean
    quantity?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartID?: boolean
    bookID?: boolean
    quantity?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartID?: boolean
    bookID?: boolean
    quantity?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectScalar = {
    id?: boolean
    cartID?: boolean
    bookID?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type CartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartID" | "bookID" | "quantity" | "createdAt", ExtArgs["result"]["cartItems"]>
  export type CartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }

  export type $CartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItems"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      book: Prisma.$BooksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartID: string
      bookID: string
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["cartItems"]>
    composites: {}
  }

  type CartItemsGetPayload<S extends boolean | null | undefined | CartItemsDefaultArgs> = $Result.GetResult<Prisma.$CartItemsPayload, S>

  type CartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemsCountAggregateInputType | true
    }

  export interface CartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItems'], meta: { name: 'CartItems' } }
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {CartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemsFindUniqueArgs>(args: SelectSubset<T, CartItemsFindUniqueArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemsFindFirstArgs>(args?: SelectSubset<T, CartItemsFindFirstArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemsFindManyArgs>(args?: SelectSubset<T, CartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItems.
     * @param {CartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     * 
     */
    create<T extends CartItemsCreateArgs>(args: SelectSubset<T, CartItemsCreateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemsCreateManyArgs>(args?: SelectSubset<T, CartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemsCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItems.
     * @param {CartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     * 
     */
    delete<T extends CartItemsDeleteArgs>(args: SelectSubset<T, CartItemsDeleteArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItems.
     * @param {CartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemsUpdateArgs>(args: SelectSubset<T, CartItemsUpdateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemsDeleteManyArgs>(args?: SelectSubset<T, CartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemsUpdateManyArgs>(args: SelectSubset<T, CartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemsUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItems.
     * @param {CartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends CartItemsUpsertArgs>(args: SelectSubset<T, CartItemsUpsertArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemsCountArgs>(
      args?: Subset<T, CartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemsAggregateArgs>(args: Subset<T, CartItemsAggregateArgs>): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>

    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsGroupByArgs} args - Group by arguments.
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
      T extends CartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemsGroupByArgs['orderBy'] }
        : { orderBy?: CartItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItems model
   */
  readonly fields: CartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItems model
   */
  interface CartItemsFieldRefs {
    readonly id: FieldRef<"CartItems", 'String'>
    readonly cartID: FieldRef<"CartItems", 'String'>
    readonly bookID: FieldRef<"CartItems", 'String'>
    readonly quantity: FieldRef<"CartItems", 'Int'>
    readonly createdAt: FieldRef<"CartItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItems findUnique
   */
  export type CartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findUniqueOrThrow
   */
  export type CartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findFirst
   */
  export type CartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findFirstOrThrow
   */
  export type CartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findMany
   */
  export type CartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems create
   */
  export type CartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItems.
     */
    data: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
  }

  /**
   * CartItems createMany
   */
  export type CartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItems createManyAndReturn
   */
  export type CartItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems update
   */
  export type CartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItems.
     */
    data: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
    /**
     * Choose, which CartItems to update.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems updateMany
   */
  export type CartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItems updateManyAndReturn
   */
  export type CartItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems upsert
   */
  export type CartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItems to update in case it exists.
     */
    where: CartItemsWhereUniqueInput
    /**
     * In case the CartItems found by the `where` argument doesn't exist, create a new CartItems with this data.
     */
    create: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
    /**
     * In case the CartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
  }

  /**
   * CartItems delete
   */
  export type CartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter which CartItems to delete.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems deleteMany
   */
  export type CartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItems without action
   */
  export type CartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
  }


  /**
   * Model Invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: string | null
    totalAmount: number | null
    issuedAt: Date | null
    status: string | null
    customerID: string | null
    cartID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: string | null
    totalAmount: number | null
    issuedAt: Date | null
    status: string | null
    customerID: string | null
    cartID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    totalAmount: number
    issuedAt: number
    status: number
    customerID: number
    cartID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    totalAmount?: true
  }

  export type InvoicesSumAggregateInputType = {
    totalAmount?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    totalAmount?: true
    issuedAt?: true
    status?: true
    customerID?: true
    cartID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    totalAmount?: true
    issuedAt?: true
    status?: true
    customerID?: true
    cartID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    totalAmount?: true
    issuedAt?: true
    status?: true
    customerID?: true
    cartID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to aggregate.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type InvoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoicesWhereInput
    orderBy?: InvoicesOrderByWithAggregationInput | InvoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: InvoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: string
    totalAmount: number
    issuedAt: Date
    status: string
    customerID: string
    cartID: string
    createdAt: Date
    updatedAt: Date
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends InvoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type InvoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalAmount?: boolean
    issuedAt?: boolean
    status?: boolean
    customerID?: boolean
    cartID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
    InvoiceItems?: boolean | Invoices$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalAmount?: boolean
    issuedAt?: boolean
    status?: boolean
    customerID?: boolean
    cartID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalAmount?: boolean
    issuedAt?: boolean
    status?: boolean
    customerID?: boolean
    cartID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type InvoicesSelectScalar = {
    id?: boolean
    totalAmount?: boolean
    issuedAt?: boolean
    status?: boolean
    customerID?: boolean
    cartID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalAmount" | "issuedAt" | "status" | "customerID" | "cartID" | "createdAt" | "updatedAt", ExtArgs["result"]["invoices"]>
  export type InvoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
    InvoiceItems?: boolean | Invoices$InvoiceItemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type InvoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomersDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }

  export type $InvoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoices"
    objects: {
      customer: Prisma.$CustomersPayload<ExtArgs>
      cart: Prisma.$CartPayload<ExtArgs>
      InvoiceItems: Prisma.$InvoiceItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalAmount: number
      issuedAt: Date
      status: string
      customerID: string
      cartID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type InvoicesGetPayload<S extends boolean | null | undefined | InvoicesDefaultArgs> = $Result.GetResult<Prisma.$InvoicesPayload, S>

  type InvoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface InvoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoices'], meta: { name: 'Invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {InvoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoicesFindUniqueArgs>(args: SelectSubset<T, InvoicesFindUniqueArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoicesFindFirstArgs>(args?: SelectSubset<T, InvoicesFindFirstArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoicesFindManyArgs>(args?: SelectSubset<T, InvoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {InvoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends InvoicesCreateArgs>(args: SelectSubset<T, InvoicesCreateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoicesCreateManyArgs>(args?: SelectSubset<T, InvoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {InvoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends InvoicesDeleteArgs>(args: SelectSubset<T, InvoicesDeleteArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {InvoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoicesUpdateArgs>(args: SelectSubset<T, InvoicesUpdateArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoicesDeleteManyArgs>(args?: SelectSubset<T, InvoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoicesUpdateManyArgs>(args: SelectSubset<T, InvoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {InvoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends InvoicesUpsertArgs>(args: SelectSubset<T, InvoicesUpsertArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoicesCountArgs>(
      args?: Subset<T, InvoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesGroupByArgs} args - Group by arguments.
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
      T extends InvoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoicesGroupByArgs['orderBy'] }
        : { orderBy?: InvoicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoices model
   */
  readonly fields: InvoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    InvoiceItems<T extends Invoices$InvoiceItemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoices$InvoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoices model
   */
  interface InvoicesFieldRefs {
    readonly id: FieldRef<"Invoices", 'String'>
    readonly totalAmount: FieldRef<"Invoices", 'Float'>
    readonly issuedAt: FieldRef<"Invoices", 'DateTime'>
    readonly status: FieldRef<"Invoices", 'String'>
    readonly customerID: FieldRef<"Invoices", 'String'>
    readonly cartID: FieldRef<"Invoices", 'String'>
    readonly createdAt: FieldRef<"Invoices", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoices findUnique
   */
  export type InvoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findUniqueOrThrow
   */
  export type InvoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices findFirst
   */
  export type InvoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findFirstOrThrow
   */
  export type InvoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices findMany
   */
  export type InvoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoicesOrderByWithRelationInput | InvoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * Invoices create
   */
  export type InvoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoices.
     */
    data: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
  }

  /**
   * Invoices createMany
   */
  export type InvoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoices createManyAndReturn
   */
  export type InvoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoicesCreateManyInput | InvoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices update
   */
  export type InvoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoices.
     */
    data: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
    /**
     * Choose, which Invoices to update.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices updateMany
   */
  export type InvoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoices updateManyAndReturn
   */
  export type InvoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoices upsert
   */
  export type InvoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoices to update in case it exists.
     */
    where: InvoicesWhereUniqueInput
    /**
     * In case the Invoices found by the `where` argument doesn't exist, create a new Invoices with this data.
     */
    create: XOR<InvoicesCreateInput, InvoicesUncheckedCreateInput>
    /**
     * In case the Invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoicesUpdateInput, InvoicesUncheckedUpdateInput>
  }

  /**
   * Invoices delete
   */
  export type InvoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
    /**
     * Filter which Invoices to delete.
     */
    where: InvoicesWhereUniqueInput
  }

  /**
   * Invoices deleteMany
   */
  export type InvoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoicesWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoices.InvoiceItems
   */
  export type Invoices$InvoiceItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    cursor?: InvoiceItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * Invoices without action
   */
  export type InvoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoices
     */
    select?: InvoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoices
     */
    omit?: InvoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoicesInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItems
   */

  export type AggregateInvoiceItems = {
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  export type InvoiceItemsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type InvoiceItemsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type InvoiceItemsMinAggregateOutputType = {
    id: string | null
    bookID: string | null
    quantity: number | null
    price: number | null
    invoiceID: string | null
  }

  export type InvoiceItemsMaxAggregateOutputType = {
    id: string | null
    bookID: string | null
    quantity: number | null
    price: number | null
    invoiceID: string | null
  }

  export type InvoiceItemsCountAggregateOutputType = {
    id: number
    bookID: number
    quantity: number
    price: number
    invoiceID: number
    _all: number
  }


  export type InvoiceItemsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type InvoiceItemsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type InvoiceItemsMinAggregateInputType = {
    id?: true
    bookID?: true
    quantity?: true
    price?: true
    invoiceID?: true
  }

  export type InvoiceItemsMaxAggregateInputType = {
    id?: true
    bookID?: true
    quantity?: true
    price?: true
    invoiceID?: true
  }

  export type InvoiceItemsCountAggregateInputType = {
    id?: true
    bookID?: true
    quantity?: true
    price?: true
    invoiceID?: true
    _all?: true
  }

  export type InvoiceItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to aggregate.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemsMaxAggregateInputType
  }

  export type GetInvoiceItemsAggregateType<T extends InvoiceItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItems[P]>
      : GetScalarType<T[P], AggregateInvoiceItems[P]>
  }




  export type InvoiceItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemsWhereInput
    orderBy?: InvoiceItemsOrderByWithAggregationInput | InvoiceItemsOrderByWithAggregationInput[]
    by: InvoiceItemsScalarFieldEnum[] | InvoiceItemsScalarFieldEnum
    having?: InvoiceItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemsCountAggregateInputType | true
    _avg?: InvoiceItemsAvgAggregateInputType
    _sum?: InvoiceItemsSumAggregateInputType
    _min?: InvoiceItemsMinAggregateInputType
    _max?: InvoiceItemsMaxAggregateInputType
  }

  export type InvoiceItemsGroupByOutputType = {
    id: string
    bookID: string
    quantity: number
    price: number
    invoiceID: string
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  type GetInvoiceItemsGroupByPayload<T extends InvoiceItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    quantity?: boolean
    price?: boolean
    invoiceID?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    quantity?: boolean
    price?: boolean
    invoiceID?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookID?: boolean
    quantity?: boolean
    price?: boolean
    invoiceID?: boolean
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItems"]>

  export type InvoiceItemsSelectScalar = {
    id?: boolean
    bookID?: boolean
    quantity?: boolean
    price?: boolean
    invoiceID?: boolean
  }

  export type InvoiceItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookID" | "quantity" | "price" | "invoiceID", ExtArgs["result"]["invoiceItems"]>
  export type InvoiceItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }
  export type InvoiceItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }
  export type InvoiceItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BooksDefaultArgs<ExtArgs>
    invoice?: boolean | InvoicesDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItems"
    objects: {
      book: Prisma.$BooksPayload<ExtArgs>
      invoice: Prisma.$InvoicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookID: string
      quantity: number
      price: number
      invoiceID: string
    }, ExtArgs["result"]["invoiceItems"]>
    composites: {}
  }

  type InvoiceItemsGetPayload<S extends boolean | null | undefined | InvoiceItemsDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemsPayload, S>

  type InvoiceItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemsCountAggregateInputType | true
    }

  export interface InvoiceItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItems'], meta: { name: 'InvoiceItems' } }
    /**
     * Find zero or one InvoiceItems that matches the filter.
     * @param {InvoiceItemsFindUniqueArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemsFindUniqueArgs>(args: SelectSubset<T, InvoiceItemsFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemsFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemsFindFirstArgs>(args?: SelectSubset<T, InvoiceItemsFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemsFindManyArgs>(args?: SelectSubset<T, InvoiceItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItems.
     * @param {InvoiceItemsCreateArgs} args - Arguments to create a InvoiceItems.
     * @example
     * // Create one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.create({
     *   data: {
     *     // ... data to create a InvoiceItems
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemsCreateArgs>(args: SelectSubset<T, InvoiceItemsCreateArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemsCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemsCreateManyArgs>(args?: SelectSubset<T, InvoiceItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemsCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItems.
     * @param {InvoiceItemsDeleteArgs} args - Arguments to delete one InvoiceItems.
     * @example
     * // Delete one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItems
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemsDeleteArgs>(args: SelectSubset<T, InvoiceItemsDeleteArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItems.
     * @param {InvoiceItemsUpdateArgs} args - Arguments to update one InvoiceItems.
     * @example
     * // Update one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemsUpdateArgs>(args: SelectSubset<T, InvoiceItemsUpdateArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemsDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemsDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemsUpdateManyArgs>(args: SelectSubset<T, InvoiceItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemsUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItems.
     * @param {InvoiceItemsUpsertArgs} args - Arguments to update or create a InvoiceItems.
     * @example
     * // Update or create a InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.upsert({
     *   create: {
     *     // ... data to create a InvoiceItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItems we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemsUpsertArgs>(args: SelectSubset<T, InvoiceItemsUpsertArgs<ExtArgs>>): Prisma__InvoiceItemsClient<$Result.GetResult<Prisma.$InvoiceItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItems.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemsCountArgs>(
      args?: Subset<T, InvoiceItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemsAggregateArgs>(args: Subset<T, InvoiceItemsAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemsAggregateType<T>>

    /**
     * Group by InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemsGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItems model
   */
  readonly fields: InvoiceItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends InvoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoicesDefaultArgs<ExtArgs>>): Prisma__InvoicesClient<$Result.GetResult<Prisma.$InvoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceItems model
   */
  interface InvoiceItemsFieldRefs {
    readonly id: FieldRef<"InvoiceItems", 'String'>
    readonly bookID: FieldRef<"InvoiceItems", 'String'>
    readonly quantity: FieldRef<"InvoiceItems", 'Int'>
    readonly price: FieldRef<"InvoiceItems", 'Float'>
    readonly invoiceID: FieldRef<"InvoiceItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItems findUnique
   */
  export type InvoiceItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems findUniqueOrThrow
   */
  export type InvoiceItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems findFirst
   */
  export type InvoiceItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems findFirstOrThrow
   */
  export type InvoiceItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems findMany
   */
  export type InvoiceItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemsOrderByWithRelationInput | InvoiceItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemsScalarFieldEnum | InvoiceItemsScalarFieldEnum[]
  }

  /**
   * InvoiceItems create
   */
  export type InvoiceItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItems.
     */
    data: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
  }

  /**
   * InvoiceItems createMany
   */
  export type InvoiceItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemsCreateManyInput | InvoiceItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItems createManyAndReturn
   */
  export type InvoiceItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemsCreateManyInput | InvoiceItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItems update
   */
  export type InvoiceItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItems to update.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems updateMany
   */
  export type InvoiceItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItems updateManyAndReturn
   */
  export type InvoiceItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItems upsert
   */
  export type InvoiceItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItems to update in case it exists.
     */
    where: InvoiceItemsWhereUniqueInput
    /**
     * In case the InvoiceItems found by the `where` argument doesn't exist, create a new InvoiceItems with this data.
     */
    create: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
    /**
     * In case the InvoiceItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
  }

  /**
   * InvoiceItems delete
   */
  export type InvoiceItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItems to delete.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems deleteMany
   */
  export type InvoiceItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemsWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItems without action
   */
  export type InvoiceItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItems
     */
    omit?: InvoiceItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemsInclude<ExtArgs> | null
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


  export const AutorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    birtdate: 'birtdate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutorsScalarFieldEnum = (typeof AutorsScalarFieldEnum)[keyof typeof AutorsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isbn: 'isbn',
    publicationYear: 'publicationYear',
    genre: 'genre',
    authorID: 'authorID',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const WarehousesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    location: 'location',
    capacity: 'capacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum]


  export const BooksProductsScalarFieldEnum: {
    id: 'id',
    bookID: 'bookID',
    price: 'price',
    stock: 'stock',
    format: 'format',
    warehouseID: 'warehouseID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BooksProductsScalarFieldEnum = (typeof BooksProductsScalarFieldEnum)[keyof typeof BooksProductsScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    customerID: 'customerID',
    createdAt: 'createdAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemsScalarFieldEnum: {
    id: 'id',
    cartID: 'cartID',
    bookID: 'bookID',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type CartItemsScalarFieldEnum = (typeof CartItemsScalarFieldEnum)[keyof typeof CartItemsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    totalAmount: 'totalAmount',
    issuedAt: 'issuedAt',
    status: 'status',
    customerID: 'customerID',
    cartID: 'cartID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const InvoiceItemsScalarFieldEnum: {
    id: 'id',
    bookID: 'bookID',
    quantity: 'quantity',
    price: 'price',
    invoiceID: 'invoiceID'
  };

  export type InvoiceItemsScalarFieldEnum = (typeof InvoiceItemsScalarFieldEnum)[keyof typeof InvoiceItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AutorsWhereInput = {
    AND?: AutorsWhereInput | AutorsWhereInput[]
    OR?: AutorsWhereInput[]
    NOT?: AutorsWhereInput | AutorsWhereInput[]
    id?: StringFilter<"Autors"> | string
    name?: StringFilter<"Autors"> | string
    bio?: StringFilter<"Autors"> | string
    birtdate?: DateTimeFilter<"Autors"> | Date | string
    createdAt?: DateTimeFilter<"Autors"> | Date | string
    updatedAt?: DateTimeFilter<"Autors"> | Date | string
    Books?: BooksListRelationFilter
  }

  export type AutorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birtdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Books?: BooksOrderByRelationAggregateInput
  }

  export type AutorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutorsWhereInput | AutorsWhereInput[]
    OR?: AutorsWhereInput[]
    NOT?: AutorsWhereInput | AutorsWhereInput[]
    name?: StringFilter<"Autors"> | string
    bio?: StringFilter<"Autors"> | string
    birtdate?: DateTimeFilter<"Autors"> | Date | string
    createdAt?: DateTimeFilter<"Autors"> | Date | string
    updatedAt?: DateTimeFilter<"Autors"> | Date | string
    Books?: BooksListRelationFilter
  }, "id">

  export type AutorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birtdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutorsCountOrderByAggregateInput
    _max?: AutorsMaxOrderByAggregateInput
    _min?: AutorsMinOrderByAggregateInput
  }

  export type AutorsScalarWhereWithAggregatesInput = {
    AND?: AutorsScalarWhereWithAggregatesInput | AutorsScalarWhereWithAggregatesInput[]
    OR?: AutorsScalarWhereWithAggregatesInput[]
    NOT?: AutorsScalarWhereWithAggregatesInput | AutorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Autors"> | string
    name?: StringWithAggregatesFilter<"Autors"> | string
    bio?: StringWithAggregatesFilter<"Autors"> | string
    birtdate?: DateTimeWithAggregatesFilter<"Autors"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Autors"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Autors"> | Date | string
  }

  export type CustomersWhereInput = {
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    id?: StringFilter<"Customers"> | string
    name?: StringFilter<"Customers"> | string
    email?: StringFilter<"Customers"> | string
    password?: StringFilter<"Customers"> | string
    address?: StringFilter<"Customers"> | string
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    Invoices?: InvoicesListRelationFilter
    Cart?: CartListRelationFilter
  }

  export type CustomersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Invoices?: InvoicesOrderByRelationAggregateInput
    Cart?: CartOrderByRelationAggregateInput
  }

  export type CustomersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    name?: StringFilter<"Customers"> | string
    password?: StringFilter<"Customers"> | string
    address?: StringFilter<"Customers"> | string
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    Invoices?: InvoicesListRelationFilter
    Cart?: CartListRelationFilter
  }, "id" | "email">

  export type CustomersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    OR?: CustomersScalarWhereWithAggregatesInput[]
    NOT?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customers"> | string
    name?: StringWithAggregatesFilter<"Customers"> | string
    email?: StringWithAggregatesFilter<"Customers"> | string
    password?: StringWithAggregatesFilter<"Customers"> | string
    address?: StringWithAggregatesFilter<"Customers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
  }

  export type BooksWhereInput = {
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    id?: StringFilter<"Books"> | string
    title?: StringFilter<"Books"> | string
    isbn?: StringFilter<"Books"> | string
    publicationYear?: IntFilter<"Books"> | number
    genre?: StringFilter<"Books"> | string
    authorID?: StringFilter<"Books"> | string
    status?: StringFilter<"Books"> | string
    createdAt?: DateTimeFilter<"Books"> | Date | string
    updatedAt?: DateTimeFilter<"Books"> | Date | string
    author?: XOR<AutorsScalarRelationFilter, AutorsWhereInput>
    BooksProducts?: BooksProductsListRelationFilter
    CartItems?: CartItemsListRelationFilter
    InvoiceItems?: InvoiceItemsListRelationFilter
  }

  export type BooksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publicationYear?: SortOrder
    genre?: SortOrder
    authorID?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: AutorsOrderByWithRelationInput
    BooksProducts?: BooksProductsOrderByRelationAggregateInput
    CartItems?: CartItemsOrderByRelationAggregateInput
    InvoiceItems?: InvoiceItemsOrderByRelationAggregateInput
  }

  export type BooksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    isbn?: string
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    title?: StringFilter<"Books"> | string
    publicationYear?: IntFilter<"Books"> | number
    genre?: StringFilter<"Books"> | string
    authorID?: StringFilter<"Books"> | string
    status?: StringFilter<"Books"> | string
    createdAt?: DateTimeFilter<"Books"> | Date | string
    updatedAt?: DateTimeFilter<"Books"> | Date | string
    author?: XOR<AutorsScalarRelationFilter, AutorsWhereInput>
    BooksProducts?: BooksProductsListRelationFilter
    CartItems?: CartItemsListRelationFilter
    InvoiceItems?: InvoiceItemsListRelationFilter
  }, "id" | "isbn">

  export type BooksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publicationYear?: SortOrder
    genre?: SortOrder
    authorID?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BooksCountOrderByAggregateInput
    _avg?: BooksAvgOrderByAggregateInput
    _max?: BooksMaxOrderByAggregateInput
    _min?: BooksMinOrderByAggregateInput
    _sum?: BooksSumOrderByAggregateInput
  }

  export type BooksScalarWhereWithAggregatesInput = {
    AND?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    OR?: BooksScalarWhereWithAggregatesInput[]
    NOT?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Books"> | string
    title?: StringWithAggregatesFilter<"Books"> | string
    isbn?: StringWithAggregatesFilter<"Books"> | string
    publicationYear?: IntWithAggregatesFilter<"Books"> | number
    genre?: StringWithAggregatesFilter<"Books"> | string
    authorID?: StringWithAggregatesFilter<"Books"> | string
    status?: StringWithAggregatesFilter<"Books"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Books"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Books"> | Date | string
  }

  export type WarehousesWhereInput = {
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    id?: StringFilter<"Warehouses"> | string
    name?: StringFilter<"Warehouses"> | string
    address?: StringFilter<"Warehouses"> | string
    location?: StringFilter<"Warehouses"> | string
    capacity?: StringFilter<"Warehouses"> | string
    createdAt?: DateTimeFilter<"Warehouses"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouses"> | Date | string
    BooksProducts?: BooksProductsListRelationFilter
  }

  export type WarehousesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BooksProducts?: BooksProductsOrderByRelationAggregateInput
  }

  export type WarehousesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    name?: StringFilter<"Warehouses"> | string
    address?: StringFilter<"Warehouses"> | string
    location?: StringFilter<"Warehouses"> | string
    capacity?: StringFilter<"Warehouses"> | string
    createdAt?: DateTimeFilter<"Warehouses"> | Date | string
    updatedAt?: DateTimeFilter<"Warehouses"> | Date | string
    BooksProducts?: BooksProductsListRelationFilter
  }, "id">

  export type WarehousesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WarehousesCountOrderByAggregateInput
    _max?: WarehousesMaxOrderByAggregateInput
    _min?: WarehousesMinOrderByAggregateInput
  }

  export type WarehousesScalarWhereWithAggregatesInput = {
    AND?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    OR?: WarehousesScalarWhereWithAggregatesInput[]
    NOT?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouses"> | string
    name?: StringWithAggregatesFilter<"Warehouses"> | string
    address?: StringWithAggregatesFilter<"Warehouses"> | string
    location?: StringWithAggregatesFilter<"Warehouses"> | string
    capacity?: StringWithAggregatesFilter<"Warehouses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Warehouses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Warehouses"> | Date | string
  }

  export type BooksProductsWhereInput = {
    AND?: BooksProductsWhereInput | BooksProductsWhereInput[]
    OR?: BooksProductsWhereInput[]
    NOT?: BooksProductsWhereInput | BooksProductsWhereInput[]
    id?: StringFilter<"BooksProducts"> | string
    bookID?: StringFilter<"BooksProducts"> | string
    price?: FloatFilter<"BooksProducts"> | number
    stock?: IntFilter<"BooksProducts"> | number
    format?: StringFilter<"BooksProducts"> | string
    warehouseID?: StringFilter<"BooksProducts"> | string
    createdAt?: DateTimeFilter<"BooksProducts"> | Date | string
    updatedAt?: DateTimeFilter<"BooksProducts"> | Date | string
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    warehouse?: XOR<WarehousesNullableScalarRelationFilter, WarehousesWhereInput> | null
  }

  export type BooksProductsOrderByWithRelationInput = {
    id?: SortOrder
    bookID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouseID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: BooksOrderByWithRelationInput
    warehouse?: WarehousesOrderByWithRelationInput
  }

  export type BooksProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BooksProductsWhereInput | BooksProductsWhereInput[]
    OR?: BooksProductsWhereInput[]
    NOT?: BooksProductsWhereInput | BooksProductsWhereInput[]
    bookID?: StringFilter<"BooksProducts"> | string
    price?: FloatFilter<"BooksProducts"> | number
    stock?: IntFilter<"BooksProducts"> | number
    format?: StringFilter<"BooksProducts"> | string
    warehouseID?: StringFilter<"BooksProducts"> | string
    createdAt?: DateTimeFilter<"BooksProducts"> | Date | string
    updatedAt?: DateTimeFilter<"BooksProducts"> | Date | string
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    warehouse?: XOR<WarehousesNullableScalarRelationFilter, WarehousesWhereInput> | null
  }, "id">

  export type BooksProductsOrderByWithAggregationInput = {
    id?: SortOrder
    bookID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouseID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BooksProductsCountOrderByAggregateInput
    _avg?: BooksProductsAvgOrderByAggregateInput
    _max?: BooksProductsMaxOrderByAggregateInput
    _min?: BooksProductsMinOrderByAggregateInput
    _sum?: BooksProductsSumOrderByAggregateInput
  }

  export type BooksProductsScalarWhereWithAggregatesInput = {
    AND?: BooksProductsScalarWhereWithAggregatesInput | BooksProductsScalarWhereWithAggregatesInput[]
    OR?: BooksProductsScalarWhereWithAggregatesInput[]
    NOT?: BooksProductsScalarWhereWithAggregatesInput | BooksProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BooksProducts"> | string
    bookID?: StringWithAggregatesFilter<"BooksProducts"> | string
    price?: FloatWithAggregatesFilter<"BooksProducts"> | number
    stock?: IntWithAggregatesFilter<"BooksProducts"> | number
    format?: StringWithAggregatesFilter<"BooksProducts"> | string
    warehouseID?: StringWithAggregatesFilter<"BooksProducts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BooksProducts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BooksProducts"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    customerID?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    CartItems?: CartItemsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    CartItems?: CartItemsOrderByRelationAggregateInput
    Invoices?: InvoicesOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    customerID?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    CartItems?: CartItemsListRelationFilter
    Invoices?: InvoicesListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    customerID?: StringWithAggregatesFilter<"Cart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemsWhereInput = {
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    id?: StringFilter<"CartItems"> | string
    cartID?: StringFilter<"CartItems"> | string
    bookID?: StringFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    createdAt?: DateTimeFilter<"CartItems"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }

  export type CartItemsOrderByWithRelationInput = {
    id?: SortOrder
    cartID?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    cart?: CartOrderByWithRelationInput
    book?: BooksOrderByWithRelationInput
  }

  export type CartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    cartID?: StringFilter<"CartItems"> | string
    bookID?: StringFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    createdAt?: DateTimeFilter<"CartItems"> | Date | string
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }, "id">

  export type CartItemsOrderByWithAggregationInput = {
    id?: SortOrder
    cartID?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: CartItemsCountOrderByAggregateInput
    _avg?: CartItemsAvgOrderByAggregateInput
    _max?: CartItemsMaxOrderByAggregateInput
    _min?: CartItemsMinOrderByAggregateInput
    _sum?: CartItemsSumOrderByAggregateInput
  }

  export type CartItemsScalarWhereWithAggregatesInput = {
    AND?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    OR?: CartItemsScalarWhereWithAggregatesInput[]
    NOT?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItems"> | string
    cartID?: StringWithAggregatesFilter<"CartItems"> | string
    bookID?: StringWithAggregatesFilter<"CartItems"> | string
    quantity?: IntWithAggregatesFilter<"CartItems"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CartItems"> | Date | string
  }

  export type InvoicesWhereInput = {
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    id?: StringFilter<"Invoices"> | string
    totalAmount?: FloatFilter<"Invoices"> | number
    issuedAt?: DateTimeFilter<"Invoices"> | Date | string
    status?: StringFilter<"Invoices"> | string
    customerID?: StringFilter<"Invoices"> | string
    cartID?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    InvoiceItems?: InvoiceItemsListRelationFilter
  }

  export type InvoicesOrderByWithRelationInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    issuedAt?: SortOrder
    status?: SortOrder
    customerID?: SortOrder
    cartID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomersOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
    InvoiceItems?: InvoiceItemsOrderByRelationAggregateInput
  }

  export type InvoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoicesWhereInput | InvoicesWhereInput[]
    OR?: InvoicesWhereInput[]
    NOT?: InvoicesWhereInput | InvoicesWhereInput[]
    totalAmount?: FloatFilter<"Invoices"> | number
    issuedAt?: DateTimeFilter<"Invoices"> | Date | string
    status?: StringFilter<"Invoices"> | string
    customerID?: StringFilter<"Invoices"> | string
    cartID?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, CustomersWhereInput>
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    InvoiceItems?: InvoiceItemsListRelationFilter
  }, "id">

  export type InvoicesOrderByWithAggregationInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    issuedAt?: SortOrder
    status?: SortOrder
    customerID?: SortOrder
    cartID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoicesCountOrderByAggregateInput
    _avg?: InvoicesAvgOrderByAggregateInput
    _max?: InvoicesMaxOrderByAggregateInput
    _min?: InvoicesMinOrderByAggregateInput
    _sum?: InvoicesSumOrderByAggregateInput
  }

  export type InvoicesScalarWhereWithAggregatesInput = {
    AND?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    OR?: InvoicesScalarWhereWithAggregatesInput[]
    NOT?: InvoicesScalarWhereWithAggregatesInput | InvoicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoices"> | string
    totalAmount?: FloatWithAggregatesFilter<"Invoices"> | number
    issuedAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    status?: StringWithAggregatesFilter<"Invoices"> | string
    customerID?: StringWithAggregatesFilter<"Invoices"> | string
    cartID?: StringWithAggregatesFilter<"Invoices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoices"> | Date | string
  }

  export type InvoiceItemsWhereInput = {
    AND?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    OR?: InvoiceItemsWhereInput[]
    NOT?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    id?: StringFilter<"InvoiceItems"> | string
    bookID?: StringFilter<"InvoiceItems"> | string
    quantity?: IntFilter<"InvoiceItems"> | number
    price?: FloatFilter<"InvoiceItems"> | number
    invoiceID?: StringFilter<"InvoiceItems"> | string
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
  }

  export type InvoiceItemsOrderByWithRelationInput = {
    id?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoiceID?: SortOrder
    book?: BooksOrderByWithRelationInput
    invoice?: InvoicesOrderByWithRelationInput
  }

  export type InvoiceItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    OR?: InvoiceItemsWhereInput[]
    NOT?: InvoiceItemsWhereInput | InvoiceItemsWhereInput[]
    bookID?: StringFilter<"InvoiceItems"> | string
    quantity?: IntFilter<"InvoiceItems"> | number
    price?: FloatFilter<"InvoiceItems"> | number
    invoiceID?: StringFilter<"InvoiceItems"> | string
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, InvoicesWhereInput>
  }, "id">

  export type InvoiceItemsOrderByWithAggregationInput = {
    id?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoiceID?: SortOrder
    _count?: InvoiceItemsCountOrderByAggregateInput
    _avg?: InvoiceItemsAvgOrderByAggregateInput
    _max?: InvoiceItemsMaxOrderByAggregateInput
    _min?: InvoiceItemsMinOrderByAggregateInput
    _sum?: InvoiceItemsSumOrderByAggregateInput
  }

  export type InvoiceItemsScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemsScalarWhereWithAggregatesInput | InvoiceItemsScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemsScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemsScalarWhereWithAggregatesInput | InvoiceItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItems"> | string
    bookID?: StringWithAggregatesFilter<"InvoiceItems"> | string
    quantity?: IntWithAggregatesFilter<"InvoiceItems"> | number
    price?: FloatWithAggregatesFilter<"InvoiceItems"> | number
    invoiceID?: StringWithAggregatesFilter<"InvoiceItems"> | string
  }

  export type AutorsCreateInput = {
    id?: string
    name: string
    bio: string
    birtdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Books?: BooksCreateNestedManyWithoutAuthorInput
  }

  export type AutorsUncheckedCreateInput = {
    id?: string
    name: string
    bio: string
    birtdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Books?: BooksUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AutorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Books?: BooksUpdateManyWithoutAuthorNestedInput
  }

  export type AutorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Books?: BooksUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AutorsCreateManyInput = {
    id?: string
    name: string
    bio: string
    birtdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoicesCreateNestedManyWithoutCustomerInput
    Cart?: CartCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutCustomerInput
    Cart?: CartUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUpdateManyWithoutCustomerNestedInput
    Cart?: CartUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUncheckedUpdateManyWithoutCustomerNestedInput
    Cart?: CartUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksCreateInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AutorsCreateNestedOneWithoutBooksInput
    BooksProducts?: BooksProductsCreateNestedManyWithoutBookInput
    CartItems?: CartItemsCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsUncheckedCreateNestedManyWithoutBookInput
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AutorsUpdateOneRequiredWithoutBooksNestedInput
    BooksProducts?: BooksProductsUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUncheckedUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUncheckedUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksCreateManyInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesCreateInput = {
    id?: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehousesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehousesCreateManyInput = {
    id?: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehousesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsCreateInput = {
    id?: string
    price: number
    stock: number
    format: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BooksCreateNestedOneWithoutBooksProductsInput
    warehouse?: WarehousesCreateNestedOneWithoutBooksProductsInput
  }

  export type BooksProductsUncheckedCreateInput = {
    id?: string
    bookID: string
    price: number
    stock: number
    format: string
    warehouseID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BooksUpdateOneRequiredWithoutBooksProductsNestedInput
    warehouse?: WarehousesUpdateOneWithoutBooksProductsNestedInput
  }

  export type BooksProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouseID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsCreateManyInput = {
    id?: string
    bookID: string
    price: number
    stock: number
    format: string
    warehouseID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouseID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    createdAt?: Date | string
    customer: CustomersCreateNestedOneWithoutCartInput
    CartItems?: CartItemsCreateNestedManyWithoutCartInput
    Invoices?: InvoicesCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    customerID: string
    createdAt?: Date | string
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutCartInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutCartNestedInput
    CartItems?: CartItemsUpdateManyWithoutCartNestedInput
    Invoices?: InvoicesUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CartItems?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    customerID: string
    createdAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutCartItemsInput
    book: BooksCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemsUncheckedCreateInput = {
    id?: string
    cartID: string
    bookID: string
    quantity: number
    createdAt?: Date | string
  }

  export type CartItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
    book?: BooksUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyInput = {
    id?: string
    cartID: string
    bookID: string
    quantity: number
    createdAt?: Date | string
  }

  export type CartItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesCreateInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutInvoicesInput
    cart: CartCreateNestedOneWithoutInvoicesInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    customerID: string
    cartID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutInvoicesNestedInput
    cart?: CartUpdateOneRequiredWithoutInvoicesNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesCreateManyInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    customerID: string
    cartID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsCreateInput = {
    id?: string
    quantity: number
    price: number
    book: BooksCreateNestedOneWithoutInvoiceItemsInput
    invoice: InvoicesCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemsUncheckedCreateInput = {
    id?: string
    bookID: string
    quantity: number
    price: number
    invoiceID: string
  }

  export type InvoiceItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    book?: BooksUpdateOneRequiredWithoutInvoiceItemsNestedInput
    invoice?: InvoicesUpdateOneRequiredWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    invoiceID?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceItemsCreateManyInput = {
    id?: string
    bookID: string
    quantity: number
    price: number
    invoiceID: string
  }

  export type InvoiceItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    invoiceID?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BooksListRelationFilter = {
    every?: BooksWhereInput
    some?: BooksWhereInput
    none?: BooksWhereInput
  }

  export type BooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birtdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birtdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birtdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InvoicesListRelationFilter = {
    every?: InvoicesWhereInput
    some?: InvoicesWhereInput
    none?: InvoicesWhereInput
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type InvoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AutorsScalarRelationFilter = {
    is?: AutorsWhereInput
    isNot?: AutorsWhereInput
  }

  export type BooksProductsListRelationFilter = {
    every?: BooksProductsWhereInput
    some?: BooksProductsWhereInput
    none?: BooksProductsWhereInput
  }

  export type CartItemsListRelationFilter = {
    every?: CartItemsWhereInput
    some?: CartItemsWhereInput
    none?: CartItemsWhereInput
  }

  export type InvoiceItemsListRelationFilter = {
    every?: InvoiceItemsWhereInput
    some?: InvoiceItemsWhereInput
    none?: InvoiceItemsWhereInput
  }

  export type BooksProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BooksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publicationYear?: SortOrder
    genre?: SortOrder
    authorID?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksAvgOrderByAggregateInput = {
    publicationYear?: SortOrder
  }

  export type BooksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publicationYear?: SortOrder
    genre?: SortOrder
    authorID?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publicationYear?: SortOrder
    genre?: SortOrder
    authorID?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksSumOrderByAggregateInput = {
    publicationYear?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type WarehousesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehousesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WarehousesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BooksScalarRelationFilter = {
    is?: BooksWhereInput
    isNot?: BooksWhereInput
  }

  export type WarehousesNullableScalarRelationFilter = {
    is?: WarehousesWhereInput | null
    isNot?: WarehousesWhereInput | null
  }

  export type BooksProductsCountOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouseID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type BooksProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouseID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksProductsMinOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouseID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BooksProductsSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CustomersScalarRelationFilter = {
    is?: CustomersWhereInput
    isNot?: CustomersWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    customerID?: SortOrder
    createdAt?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemsCountOrderByAggregateInput = {
    id?: SortOrder
    cartID?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cartID?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemsMinOrderByAggregateInput = {
    id?: SortOrder
    cartID?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InvoicesCountOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    issuedAt?: SortOrder
    status?: SortOrder
    customerID?: SortOrder
    cartID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoicesAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type InvoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    issuedAt?: SortOrder
    status?: SortOrder
    customerID?: SortOrder
    cartID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoicesMinOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    issuedAt?: SortOrder
    status?: SortOrder
    customerID?: SortOrder
    cartID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoicesSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type InvoicesScalarRelationFilter = {
    is?: InvoicesWhereInput
    isNot?: InvoicesWhereInput
  }

  export type InvoiceItemsCountOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoiceID?: SortOrder
  }

  export type InvoiceItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type InvoiceItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoiceID?: SortOrder
  }

  export type InvoiceItemsMinOrderByAggregateInput = {
    id?: SortOrder
    bookID?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoiceID?: SortOrder
  }

  export type InvoiceItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type BooksCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BooksUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorInput | BooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorInput | BooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorInput | BooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorInput | BooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorInput | BooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorInput | BooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type InvoicesCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput> | InvoicesCreateWithoutCustomerInput[] | InvoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCustomerInput | InvoicesCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoicesCreateManyCustomerInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type CartCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput> | InvoicesCreateWithoutCustomerInput[] | InvoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCustomerInput | InvoicesCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoicesCreateManyCustomerInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type InvoicesUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput> | InvoicesCreateWithoutCustomerInput[] | InvoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCustomerInput | InvoicesCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutCustomerInput | InvoicesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoicesCreateManyCustomerInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutCustomerInput | InvoicesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutCustomerInput | InvoicesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type CartUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCustomerInput | CartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCustomerInput | CartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCustomerInput | CartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput> | InvoicesCreateWithoutCustomerInput[] | InvoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCustomerInput | InvoicesCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutCustomerInput | InvoicesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoicesCreateManyCustomerInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutCustomerInput | InvoicesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutCustomerInput | InvoicesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput> | CartCreateWithoutCustomerInput[] | CartUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CartCreateOrConnectWithoutCustomerInput | CartCreateOrConnectWithoutCustomerInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutCustomerInput | CartUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CartCreateManyCustomerInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutCustomerInput | CartUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CartUpdateManyWithWhereWithoutCustomerInput | CartUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type AutorsCreateNestedOneWithoutBooksInput = {
    create?: XOR<AutorsCreateWithoutBooksInput, AutorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AutorsCreateOrConnectWithoutBooksInput
    connect?: AutorsWhereUniqueInput
  }

  export type BooksProductsCreateNestedManyWithoutBookInput = {
    create?: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput> | BooksProductsCreateWithoutBookInput[] | BooksProductsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutBookInput | BooksProductsCreateOrConnectWithoutBookInput[]
    createMany?: BooksProductsCreateManyBookInputEnvelope
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
  }

  export type CartItemsCreateNestedManyWithoutBookInput = {
    create?: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput> | CartItemsCreateWithoutBookInput[] | CartItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutBookInput | CartItemsCreateOrConnectWithoutBookInput[]
    createMany?: CartItemsCreateManyBookInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type InvoiceItemsCreateNestedManyWithoutBookInput = {
    create?: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput> | InvoiceItemsCreateWithoutBookInput[] | InvoiceItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutBookInput | InvoiceItemsCreateOrConnectWithoutBookInput[]
    createMany?: InvoiceItemsCreateManyBookInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type BooksProductsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput> | BooksProductsCreateWithoutBookInput[] | BooksProductsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutBookInput | BooksProductsCreateOrConnectWithoutBookInput[]
    createMany?: BooksProductsCreateManyBookInputEnvelope
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput> | CartItemsCreateWithoutBookInput[] | CartItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutBookInput | CartItemsCreateOrConnectWithoutBookInput[]
    createMany?: CartItemsCreateManyBookInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type InvoiceItemsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput> | InvoiceItemsCreateWithoutBookInput[] | InvoiceItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutBookInput | InvoiceItemsCreateOrConnectWithoutBookInput[]
    createMany?: InvoiceItemsCreateManyBookInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AutorsUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AutorsCreateWithoutBooksInput, AutorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AutorsCreateOrConnectWithoutBooksInput
    upsert?: AutorsUpsertWithoutBooksInput
    connect?: AutorsWhereUniqueInput
    update?: XOR<XOR<AutorsUpdateToOneWithWhereWithoutBooksInput, AutorsUpdateWithoutBooksInput>, AutorsUncheckedUpdateWithoutBooksInput>
  }

  export type BooksProductsUpdateManyWithoutBookNestedInput = {
    create?: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput> | BooksProductsCreateWithoutBookInput[] | BooksProductsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutBookInput | BooksProductsCreateOrConnectWithoutBookInput[]
    upsert?: BooksProductsUpsertWithWhereUniqueWithoutBookInput | BooksProductsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BooksProductsCreateManyBookInputEnvelope
    set?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    disconnect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    delete?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    update?: BooksProductsUpdateWithWhereUniqueWithoutBookInput | BooksProductsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BooksProductsUpdateManyWithWhereWithoutBookInput | BooksProductsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
  }

  export type CartItemsUpdateManyWithoutBookNestedInput = {
    create?: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput> | CartItemsCreateWithoutBookInput[] | CartItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutBookInput | CartItemsCreateOrConnectWithoutBookInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutBookInput | CartItemsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CartItemsCreateManyBookInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutBookInput | CartItemsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutBookInput | CartItemsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type InvoiceItemsUpdateManyWithoutBookNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput> | InvoiceItemsCreateWithoutBookInput[] | InvoiceItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutBookInput | InvoiceItemsCreateOrConnectWithoutBookInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutBookInput | InvoiceItemsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: InvoiceItemsCreateManyBookInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutBookInput | InvoiceItemsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutBookInput | InvoiceItemsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type BooksProductsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput> | BooksProductsCreateWithoutBookInput[] | BooksProductsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutBookInput | BooksProductsCreateOrConnectWithoutBookInput[]
    upsert?: BooksProductsUpsertWithWhereUniqueWithoutBookInput | BooksProductsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BooksProductsCreateManyBookInputEnvelope
    set?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    disconnect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    delete?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    update?: BooksProductsUpdateWithWhereUniqueWithoutBookInput | BooksProductsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BooksProductsUpdateManyWithWhereWithoutBookInput | BooksProductsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput> | CartItemsCreateWithoutBookInput[] | CartItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutBookInput | CartItemsCreateOrConnectWithoutBookInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutBookInput | CartItemsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CartItemsCreateManyBookInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutBookInput | CartItemsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutBookInput | CartItemsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput> | InvoiceItemsCreateWithoutBookInput[] | InvoiceItemsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutBookInput | InvoiceItemsCreateOrConnectWithoutBookInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutBookInput | InvoiceItemsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: InvoiceItemsCreateManyBookInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutBookInput | InvoiceItemsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutBookInput | InvoiceItemsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type BooksProductsCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput> | BooksProductsCreateWithoutWarehouseInput[] | BooksProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutWarehouseInput | BooksProductsCreateOrConnectWithoutWarehouseInput[]
    createMany?: BooksProductsCreateManyWarehouseInputEnvelope
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
  }

  export type BooksProductsUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput> | BooksProductsCreateWithoutWarehouseInput[] | BooksProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutWarehouseInput | BooksProductsCreateOrConnectWithoutWarehouseInput[]
    createMany?: BooksProductsCreateManyWarehouseInputEnvelope
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
  }

  export type BooksProductsUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput> | BooksProductsCreateWithoutWarehouseInput[] | BooksProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutWarehouseInput | BooksProductsCreateOrConnectWithoutWarehouseInput[]
    upsert?: BooksProductsUpsertWithWhereUniqueWithoutWarehouseInput | BooksProductsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: BooksProductsCreateManyWarehouseInputEnvelope
    set?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    disconnect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    delete?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    update?: BooksProductsUpdateWithWhereUniqueWithoutWarehouseInput | BooksProductsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: BooksProductsUpdateManyWithWhereWithoutWarehouseInput | BooksProductsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
  }

  export type BooksProductsUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput> | BooksProductsCreateWithoutWarehouseInput[] | BooksProductsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: BooksProductsCreateOrConnectWithoutWarehouseInput | BooksProductsCreateOrConnectWithoutWarehouseInput[]
    upsert?: BooksProductsUpsertWithWhereUniqueWithoutWarehouseInput | BooksProductsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: BooksProductsCreateManyWarehouseInputEnvelope
    set?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    disconnect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    delete?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    connect?: BooksProductsWhereUniqueInput | BooksProductsWhereUniqueInput[]
    update?: BooksProductsUpdateWithWhereUniqueWithoutWarehouseInput | BooksProductsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: BooksProductsUpdateManyWithWhereWithoutWarehouseInput | BooksProductsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
  }

  export type BooksCreateNestedOneWithoutBooksProductsInput = {
    create?: XOR<BooksCreateWithoutBooksProductsInput, BooksUncheckedCreateWithoutBooksProductsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutBooksProductsInput
    connect?: BooksWhereUniqueInput
  }

  export type WarehousesCreateNestedOneWithoutBooksProductsInput = {
    create?: XOR<WarehousesCreateWithoutBooksProductsInput, WarehousesUncheckedCreateWithoutBooksProductsInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutBooksProductsInput
    connect?: WarehousesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BooksUpdateOneRequiredWithoutBooksProductsNestedInput = {
    create?: XOR<BooksCreateWithoutBooksProductsInput, BooksUncheckedCreateWithoutBooksProductsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutBooksProductsInput
    upsert?: BooksUpsertWithoutBooksProductsInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutBooksProductsInput, BooksUpdateWithoutBooksProductsInput>, BooksUncheckedUpdateWithoutBooksProductsInput>
  }

  export type WarehousesUpdateOneWithoutBooksProductsNestedInput = {
    create?: XOR<WarehousesCreateWithoutBooksProductsInput, WarehousesUncheckedCreateWithoutBooksProductsInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutBooksProductsInput
    upsert?: WarehousesUpsertWithoutBooksProductsInput
    disconnect?: WarehousesWhereInput | boolean
    delete?: WarehousesWhereInput | boolean
    connect?: WarehousesWhereUniqueInput
    update?: XOR<XOR<WarehousesUpdateToOneWithWhereWithoutBooksProductsInput, WarehousesUpdateWithoutBooksProductsInput>, WarehousesUncheckedUpdateWithoutBooksProductsInput>
  }

  export type CustomersCreateNestedOneWithoutCartInput = {
    create?: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCartInput
    connect?: CustomersWhereUniqueInput
  }

  export type CartItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type InvoicesCreateNestedManyWithoutCartInput = {
    create?: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput> | InvoicesCreateWithoutCartInput[] | InvoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCartInput | InvoicesCreateOrConnectWithoutCartInput[]
    createMany?: InvoicesCreateManyCartInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type InvoicesUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput> | InvoicesCreateWithoutCartInput[] | InvoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCartInput | InvoicesCreateOrConnectWithoutCartInput[]
    createMany?: InvoicesCreateManyCartInputEnvelope
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
  }

  export type CustomersUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutCartInput
    upsert?: CustomersUpsertWithoutCartInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutCartInput, CustomersUpdateWithoutCartInput>, CustomersUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type InvoicesUpdateManyWithoutCartNestedInput = {
    create?: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput> | InvoicesCreateWithoutCartInput[] | InvoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCartInput | InvoicesCreateOrConnectWithoutCartInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutCartInput | InvoicesUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: InvoicesCreateManyCartInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutCartInput | InvoicesUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutCartInput | InvoicesUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput> | CartItemsCreateWithoutCartInput[] | CartItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartInput | CartItemsCreateOrConnectWithoutCartInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartInput | CartItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemsCreateManyCartInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartInput | CartItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartInput | CartItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type InvoicesUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput> | InvoicesCreateWithoutCartInput[] | InvoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: InvoicesCreateOrConnectWithoutCartInput | InvoicesCreateOrConnectWithoutCartInput[]
    upsert?: InvoicesUpsertWithWhereUniqueWithoutCartInput | InvoicesUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: InvoicesCreateManyCartInputEnvelope
    set?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    disconnect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    delete?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    connect?: InvoicesWhereUniqueInput | InvoicesWhereUniqueInput[]
    update?: InvoicesUpdateWithWhereUniqueWithoutCartInput | InvoicesUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: InvoicesUpdateManyWithWhereWithoutCartInput | InvoicesUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    connect?: CartWhereUniqueInput
  }

  export type BooksCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<BooksCreateWithoutCartItemsInput, BooksUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutCartItemsInput
    connect?: BooksWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    upsert?: CartUpsertWithoutCartItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCartItemsInput, CartUpdateWithoutCartItemsInput>, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type BooksUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<BooksCreateWithoutCartItemsInput, BooksUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutCartItemsInput
    upsert?: BooksUpsertWithoutCartItemsInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutCartItemsInput, BooksUpdateWithoutCartItemsInput>, BooksUncheckedUpdateWithoutCartItemsInput>
  }

  export type CustomersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomersCreateWithoutInvoicesInput, CustomersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutInvoicesInput
    connect?: CustomersWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CartCreateOrConnectWithoutInvoicesInput
    connect?: CartWhereUniqueInput
  }

  export type InvoiceItemsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
  }

  export type CustomersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomersCreateWithoutInvoicesInput, CustomersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutInvoicesInput
    upsert?: CustomersUpsertWithoutInvoicesInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutInvoicesInput, CustomersUpdateWithoutInvoicesInput>, CustomersUncheckedUpdateWithoutInvoicesInput>
  }

  export type CartUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CartCreateOrConnectWithoutInvoicesInput
    upsert?: CartUpsertWithoutInvoicesInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutInvoicesInput, CartUpdateWithoutInvoicesInput>, CartUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput> | InvoiceItemsCreateWithoutInvoiceInput[] | InvoiceItemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemsCreateOrConnectWithoutInvoiceInput | InvoiceItemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemsCreateManyInvoiceInputEnvelope
    set?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    disconnect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    delete?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    connect?: InvoiceItemsWhereUniqueInput | InvoiceItemsWhereUniqueInput[]
    update?: InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
  }

  export type BooksCreateNestedOneWithoutInvoiceItemsInput = {
    create?: XOR<BooksCreateWithoutInvoiceItemsInput, BooksUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutInvoiceItemsInput
    connect?: BooksWhereUniqueInput
  }

  export type InvoicesCreateNestedOneWithoutInvoiceItemsInput = {
    create?: XOR<InvoicesCreateWithoutInvoiceItemsInput, InvoicesUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutInvoiceItemsInput
    connect?: InvoicesWhereUniqueInput
  }

  export type BooksUpdateOneRequiredWithoutInvoiceItemsNestedInput = {
    create?: XOR<BooksCreateWithoutInvoiceItemsInput, BooksUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: BooksCreateOrConnectWithoutInvoiceItemsInput
    upsert?: BooksUpsertWithoutInvoiceItemsInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutInvoiceItemsInput, BooksUpdateWithoutInvoiceItemsInput>, BooksUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type InvoicesUpdateOneRequiredWithoutInvoiceItemsNestedInput = {
    create?: XOR<InvoicesCreateWithoutInvoiceItemsInput, InvoicesUncheckedCreateWithoutInvoiceItemsInput>
    connectOrCreate?: InvoicesCreateOrConnectWithoutInvoiceItemsInput
    upsert?: InvoicesUpsertWithoutInvoiceItemsInput
    connect?: InvoicesWhereUniqueInput
    update?: XOR<XOR<InvoicesUpdateToOneWithWhereWithoutInvoiceItemsInput, InvoicesUpdateWithoutInvoiceItemsInput>, InvoicesUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BooksCreateWithoutAuthorInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsCreateNestedManyWithoutBookInput
    CartItems?: CartItemsCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsUncheckedCreateNestedManyWithoutBookInput
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput>
  }

  export type BooksCreateManyAuthorInputEnvelope = {
    data: BooksCreateManyAuthorInput | BooksCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BooksUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    update: XOR<BooksUpdateWithoutAuthorInput, BooksUncheckedUpdateWithoutAuthorInput>
    create: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput>
  }

  export type BooksUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    data: XOR<BooksUpdateWithoutAuthorInput, BooksUncheckedUpdateWithoutAuthorInput>
  }

  export type BooksUpdateManyWithWhereWithoutAuthorInput = {
    where: BooksScalarWhereInput
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BooksScalarWhereInput = {
    AND?: BooksScalarWhereInput | BooksScalarWhereInput[]
    OR?: BooksScalarWhereInput[]
    NOT?: BooksScalarWhereInput | BooksScalarWhereInput[]
    id?: StringFilter<"Books"> | string
    title?: StringFilter<"Books"> | string
    isbn?: StringFilter<"Books"> | string
    publicationYear?: IntFilter<"Books"> | number
    genre?: StringFilter<"Books"> | string
    authorID?: StringFilter<"Books"> | string
    status?: StringFilter<"Books"> | string
    createdAt?: DateTimeFilter<"Books"> | Date | string
    updatedAt?: DateTimeFilter<"Books"> | Date | string
  }

  export type InvoicesCreateWithoutCustomerInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cart: CartCreateNestedOneWithoutInvoicesInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutCustomerInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    cartID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutCustomerInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput>
  }

  export type InvoicesCreateManyCustomerInputEnvelope = {
    data: InvoicesCreateManyCustomerInput | InvoicesCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    CartItems?: CartItemsCreateNestedManyWithoutCartInput
    Invoices?: InvoicesCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutCartInput
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCustomerInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
  }

  export type CartCreateManyCustomerInputEnvelope = {
    data: CartCreateManyCustomerInput | CartCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutCustomerInput, InvoicesUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoicesCreateWithoutCustomerInput, InvoicesUncheckedCreateWithoutCustomerInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutCustomerInput, InvoicesUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoicesScalarWhereInput = {
    AND?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    OR?: InvoicesScalarWhereInput[]
    NOT?: InvoicesScalarWhereInput | InvoicesScalarWhereInput[]
    id?: StringFilter<"Invoices"> | string
    totalAmount?: FloatFilter<"Invoices"> | number
    issuedAt?: DateTimeFilter<"Invoices"> | Date | string
    status?: StringFilter<"Invoices"> | string
    customerID?: StringFilter<"Invoices"> | string
    cartID?: StringFilter<"Invoices"> | string
    createdAt?: DateTimeFilter<"Invoices"> | Date | string
    updatedAt?: DateTimeFilter<"Invoices"> | Date | string
  }

  export type CartUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
    create: XOR<CartCreateWithoutCustomerInput, CartUncheckedCreateWithoutCustomerInput>
  }

  export type CartUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutCustomerInput, CartUncheckedUpdateWithoutCustomerInput>
  }

  export type CartUpdateManyWithWhereWithoutCustomerInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: StringFilter<"Cart"> | string
    customerID?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
  }

  export type AutorsCreateWithoutBooksInput = {
    id?: string
    name: string
    bio: string
    birtdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutorsUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    bio: string
    birtdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutorsCreateOrConnectWithoutBooksInput = {
    where: AutorsWhereUniqueInput
    create: XOR<AutorsCreateWithoutBooksInput, AutorsUncheckedCreateWithoutBooksInput>
  }

  export type BooksProductsCreateWithoutBookInput = {
    id?: string
    price: number
    stock: number
    format: string
    createdAt?: Date | string
    updatedAt?: Date | string
    warehouse?: WarehousesCreateNestedOneWithoutBooksProductsInput
  }

  export type BooksProductsUncheckedCreateWithoutBookInput = {
    id?: string
    price: number
    stock: number
    format: string
    warehouseID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksProductsCreateOrConnectWithoutBookInput = {
    where: BooksProductsWhereUniqueInput
    create: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput>
  }

  export type BooksProductsCreateManyBookInputEnvelope = {
    data: BooksProductsCreateManyBookInput | BooksProductsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CartItemsCreateWithoutBookInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemsUncheckedCreateWithoutBookInput = {
    id?: string
    cartID: string
    quantity: number
    createdAt?: Date | string
  }

  export type CartItemsCreateOrConnectWithoutBookInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput>
  }

  export type CartItemsCreateManyBookInputEnvelope = {
    data: CartItemsCreateManyBookInput | CartItemsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemsCreateWithoutBookInput = {
    id?: string
    quantity: number
    price: number
    invoice: InvoicesCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemsUncheckedCreateWithoutBookInput = {
    id?: string
    quantity: number
    price: number
    invoiceID: string
  }

  export type InvoiceItemsCreateOrConnectWithoutBookInput = {
    where: InvoiceItemsWhereUniqueInput
    create: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput>
  }

  export type InvoiceItemsCreateManyBookInputEnvelope = {
    data: InvoiceItemsCreateManyBookInput | InvoiceItemsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AutorsUpsertWithoutBooksInput = {
    update: XOR<AutorsUpdateWithoutBooksInput, AutorsUncheckedUpdateWithoutBooksInput>
    create: XOR<AutorsCreateWithoutBooksInput, AutorsUncheckedCreateWithoutBooksInput>
    where?: AutorsWhereInput
  }

  export type AutorsUpdateToOneWithWhereWithoutBooksInput = {
    where?: AutorsWhereInput
    data: XOR<AutorsUpdateWithoutBooksInput, AutorsUncheckedUpdateWithoutBooksInput>
  }

  export type AutorsUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutorsUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birtdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsUpsertWithWhereUniqueWithoutBookInput = {
    where: BooksProductsWhereUniqueInput
    update: XOR<BooksProductsUpdateWithoutBookInput, BooksProductsUncheckedUpdateWithoutBookInput>
    create: XOR<BooksProductsCreateWithoutBookInput, BooksProductsUncheckedCreateWithoutBookInput>
  }

  export type BooksProductsUpdateWithWhereUniqueWithoutBookInput = {
    where: BooksProductsWhereUniqueInput
    data: XOR<BooksProductsUpdateWithoutBookInput, BooksProductsUncheckedUpdateWithoutBookInput>
  }

  export type BooksProductsUpdateManyWithWhereWithoutBookInput = {
    where: BooksProductsScalarWhereInput
    data: XOR<BooksProductsUpdateManyMutationInput, BooksProductsUncheckedUpdateManyWithoutBookInput>
  }

  export type BooksProductsScalarWhereInput = {
    AND?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
    OR?: BooksProductsScalarWhereInput[]
    NOT?: BooksProductsScalarWhereInput | BooksProductsScalarWhereInput[]
    id?: StringFilter<"BooksProducts"> | string
    bookID?: StringFilter<"BooksProducts"> | string
    price?: FloatFilter<"BooksProducts"> | number
    stock?: IntFilter<"BooksProducts"> | number
    format?: StringFilter<"BooksProducts"> | string
    warehouseID?: StringFilter<"BooksProducts"> | string
    createdAt?: DateTimeFilter<"BooksProducts"> | Date | string
    updatedAt?: DateTimeFilter<"BooksProducts"> | Date | string
  }

  export type CartItemsUpsertWithWhereUniqueWithoutBookInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutBookInput, CartItemsUncheckedUpdateWithoutBookInput>
    create: XOR<CartItemsCreateWithoutBookInput, CartItemsUncheckedCreateWithoutBookInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutBookInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutBookInput, CartItemsUncheckedUpdateWithoutBookInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutBookInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutBookInput>
  }

  export type CartItemsScalarWhereInput = {
    AND?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    OR?: CartItemsScalarWhereInput[]
    NOT?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    id?: StringFilter<"CartItems"> | string
    cartID?: StringFilter<"CartItems"> | string
    bookID?: StringFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    createdAt?: DateTimeFilter<"CartItems"> | Date | string
  }

  export type InvoiceItemsUpsertWithWhereUniqueWithoutBookInput = {
    where: InvoiceItemsWhereUniqueInput
    update: XOR<InvoiceItemsUpdateWithoutBookInput, InvoiceItemsUncheckedUpdateWithoutBookInput>
    create: XOR<InvoiceItemsCreateWithoutBookInput, InvoiceItemsUncheckedCreateWithoutBookInput>
  }

  export type InvoiceItemsUpdateWithWhereUniqueWithoutBookInput = {
    where: InvoiceItemsWhereUniqueInput
    data: XOR<InvoiceItemsUpdateWithoutBookInput, InvoiceItemsUncheckedUpdateWithoutBookInput>
  }

  export type InvoiceItemsUpdateManyWithWhereWithoutBookInput = {
    where: InvoiceItemsScalarWhereInput
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyWithoutBookInput>
  }

  export type InvoiceItemsScalarWhereInput = {
    AND?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
    OR?: InvoiceItemsScalarWhereInput[]
    NOT?: InvoiceItemsScalarWhereInput | InvoiceItemsScalarWhereInput[]
    id?: StringFilter<"InvoiceItems"> | string
    bookID?: StringFilter<"InvoiceItems"> | string
    quantity?: IntFilter<"InvoiceItems"> | number
    price?: FloatFilter<"InvoiceItems"> | number
    invoiceID?: StringFilter<"InvoiceItems"> | string
  }

  export type BooksProductsCreateWithoutWarehouseInput = {
    id?: string
    price: number
    stock: number
    format: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BooksCreateNestedOneWithoutBooksProductsInput
  }

  export type BooksProductsUncheckedCreateWithoutWarehouseInput = {
    id?: string
    bookID: string
    price: number
    stock: number
    format: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksProductsCreateOrConnectWithoutWarehouseInput = {
    where: BooksProductsWhereUniqueInput
    create: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput>
  }

  export type BooksProductsCreateManyWarehouseInputEnvelope = {
    data: BooksProductsCreateManyWarehouseInput | BooksProductsCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type BooksProductsUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: BooksProductsWhereUniqueInput
    update: XOR<BooksProductsUpdateWithoutWarehouseInput, BooksProductsUncheckedUpdateWithoutWarehouseInput>
    create: XOR<BooksProductsCreateWithoutWarehouseInput, BooksProductsUncheckedCreateWithoutWarehouseInput>
  }

  export type BooksProductsUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: BooksProductsWhereUniqueInput
    data: XOR<BooksProductsUpdateWithoutWarehouseInput, BooksProductsUncheckedUpdateWithoutWarehouseInput>
  }

  export type BooksProductsUpdateManyWithWhereWithoutWarehouseInput = {
    where: BooksProductsScalarWhereInput
    data: XOR<BooksProductsUpdateManyMutationInput, BooksProductsUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type BooksCreateWithoutBooksProductsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AutorsCreateNestedOneWithoutBooksInput
    CartItems?: CartItemsCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutBooksProductsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutBooksProductsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutBooksProductsInput, BooksUncheckedCreateWithoutBooksProductsInput>
  }

  export type WarehousesCreateWithoutBooksProductsInput = {
    id?: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehousesUncheckedCreateWithoutBooksProductsInput = {
    id?: string
    name: string
    address: string
    location: string
    capacity: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WarehousesCreateOrConnectWithoutBooksProductsInput = {
    where: WarehousesWhereUniqueInput
    create: XOR<WarehousesCreateWithoutBooksProductsInput, WarehousesUncheckedCreateWithoutBooksProductsInput>
  }

  export type BooksUpsertWithoutBooksProductsInput = {
    update: XOR<BooksUpdateWithoutBooksProductsInput, BooksUncheckedUpdateWithoutBooksProductsInput>
    create: XOR<BooksCreateWithoutBooksProductsInput, BooksUncheckedCreateWithoutBooksProductsInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutBooksProductsInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutBooksProductsInput, BooksUncheckedUpdateWithoutBooksProductsInput>
  }

  export type BooksUpdateWithoutBooksProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AutorsUpdateOneRequiredWithoutBooksNestedInput
    CartItems?: CartItemsUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutBooksProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CartItems?: CartItemsUncheckedUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type WarehousesUpsertWithoutBooksProductsInput = {
    update: XOR<WarehousesUpdateWithoutBooksProductsInput, WarehousesUncheckedUpdateWithoutBooksProductsInput>
    create: XOR<WarehousesCreateWithoutBooksProductsInput, WarehousesUncheckedCreateWithoutBooksProductsInput>
    where?: WarehousesWhereInput
  }

  export type WarehousesUpdateToOneWithWhereWithoutBooksProductsInput = {
    where?: WarehousesWhereInput
    data: XOR<WarehousesUpdateWithoutBooksProductsInput, WarehousesUncheckedUpdateWithoutBooksProductsInput>
  }

  export type WarehousesUpdateWithoutBooksProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehousesUncheckedUpdateWithoutBooksProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateWithoutCartInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoicesCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutCartInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutCartInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateWithoutCartInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    book: BooksCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemsUncheckedCreateWithoutCartInput = {
    id?: string
    bookID: string
    quantity: number
    createdAt?: Date | string
  }

  export type CartItemsCreateOrConnectWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateManyCartInputEnvelope = {
    data: CartItemsCreateManyCartInput | CartItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type InvoicesCreateWithoutCartInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutInvoicesInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesUncheckedCreateWithoutCartInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    customerID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoicesCreateOrConnectWithoutCartInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput>
  }

  export type InvoicesCreateManyCartInputEnvelope = {
    data: InvoicesCreateManyCartInput | InvoicesCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CustomersUpsertWithoutCartInput = {
    update: XOR<CustomersUpdateWithoutCartInput, CustomersUncheckedUpdateWithoutCartInput>
    create: XOR<CustomersCreateWithoutCartInput, CustomersUncheckedCreateWithoutCartInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutCartInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutCartInput, CustomersUncheckedUpdateWithoutCartInput>
  }

  export type CustomersUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CartItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemsCreateWithoutCartInput, CartItemsUncheckedCreateWithoutCartInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutCartInput, CartItemsUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutCartInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type InvoicesUpsertWithWhereUniqueWithoutCartInput = {
    where: InvoicesWhereUniqueInput
    update: XOR<InvoicesUpdateWithoutCartInput, InvoicesUncheckedUpdateWithoutCartInput>
    create: XOR<InvoicesCreateWithoutCartInput, InvoicesUncheckedCreateWithoutCartInput>
  }

  export type InvoicesUpdateWithWhereUniqueWithoutCartInput = {
    where: InvoicesWhereUniqueInput
    data: XOR<InvoicesUpdateWithoutCartInput, InvoicesUncheckedUpdateWithoutCartInput>
  }

  export type InvoicesUpdateManyWithWhereWithoutCartInput = {
    where: InvoicesScalarWhereInput
    data: XOR<InvoicesUpdateManyMutationInput, InvoicesUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutCartItemsInput = {
    id?: string
    createdAt?: Date | string
    customer: CustomersCreateNestedOneWithoutCartInput
    Invoices?: InvoicesCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemsInput = {
    id?: string
    customerID: string
    createdAt?: Date | string
    Invoices?: InvoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutCartItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type BooksCreateWithoutCartItemsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AutorsCreateNestedOneWithoutBooksInput
    BooksProducts?: BooksProductsCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutCartItemsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsUncheckedCreateNestedManyWithoutBookInput
    InvoiceItems?: InvoiceItemsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutCartItemsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutCartItemsInput, BooksUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutCartItemsInput = {
    update: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutCartNestedInput
    Invoices?: InvoicesUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type BooksUpsertWithoutCartItemsInput = {
    update: XOR<BooksUpdateWithoutCartItemsInput, BooksUncheckedUpdateWithoutCartItemsInput>
    create: XOR<BooksCreateWithoutCartItemsInput, BooksUncheckedCreateWithoutCartItemsInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutCartItemsInput, BooksUncheckedUpdateWithoutCartItemsInput>
  }

  export type BooksUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AutorsUpdateOneRequiredWithoutBooksNestedInput
    BooksProducts?: BooksProductsUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUncheckedUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type CustomersCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cart?: CartCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    password: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Cart?: CartUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersCreateOrConnectWithoutInvoicesInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutInvoicesInput, CustomersUncheckedCreateWithoutInvoicesInput>
  }

  export type CartCreateWithoutInvoicesInput = {
    id?: string
    createdAt?: Date | string
    customer: CustomersCreateNestedOneWithoutCartInput
    CartItems?: CartItemsCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutInvoicesInput = {
    id?: string
    customerID: string
    createdAt?: Date | string
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutInvoicesInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemsCreateWithoutInvoiceInput = {
    id?: string
    quantity: number
    price: number
    book: BooksCreateNestedOneWithoutInvoiceItemsInput
  }

  export type InvoiceItemsUncheckedCreateWithoutInvoiceInput = {
    id?: string
    bookID: string
    quantity: number
    price: number
  }

  export type InvoiceItemsCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    create: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemsCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemsCreateManyInvoiceInput | InvoiceItemsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type CustomersUpsertWithoutInvoicesInput = {
    update: XOR<CustomersUpdateWithoutInvoicesInput, CustomersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomersCreateWithoutInvoicesInput, CustomersUncheckedCreateWithoutInvoicesInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutInvoicesInput, CustomersUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomersUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cart?: CartUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Cart?: CartUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CartUpsertWithoutInvoicesInput = {
    update: XOR<CartUpdateWithoutInvoicesInput, CartUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutInvoicesInput, CartUncheckedUpdateWithoutInvoicesInput>
  }

  export type CartUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutCartNestedInput
    CartItems?: CartItemsUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CartItems?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type InvoiceItemsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    update: XOR<InvoiceItemsUpdateWithoutInvoiceInput, InvoiceItemsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemsCreateWithoutInvoiceInput, InvoiceItemsUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemsWhereUniqueInput
    data: XOR<InvoiceItemsUpdateWithoutInvoiceInput, InvoiceItemsUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemsUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemsScalarWhereInput
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type BooksCreateWithoutInvoiceItemsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AutorsCreateNestedOneWithoutBooksInput
    BooksProducts?: BooksProductsCreateNestedManyWithoutBookInput
    CartItems?: CartItemsCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutInvoiceItemsInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    authorID: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BooksProducts?: BooksProductsUncheckedCreateNestedManyWithoutBookInput
    CartItems?: CartItemsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutInvoiceItemsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutInvoiceItemsInput, BooksUncheckedCreateWithoutInvoiceItemsInput>
  }

  export type InvoicesCreateWithoutInvoiceItemsInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomersCreateNestedOneWithoutInvoicesInput
    cart: CartCreateNestedOneWithoutInvoicesInput
  }

  export type InvoicesUncheckedCreateWithoutInvoiceItemsInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    customerID: string
    cartID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoicesCreateOrConnectWithoutInvoiceItemsInput = {
    where: InvoicesWhereUniqueInput
    create: XOR<InvoicesCreateWithoutInvoiceItemsInput, InvoicesUncheckedCreateWithoutInvoiceItemsInput>
  }

  export type BooksUpsertWithoutInvoiceItemsInput = {
    update: XOR<BooksUpdateWithoutInvoiceItemsInput, BooksUncheckedUpdateWithoutInvoiceItemsInput>
    create: XOR<BooksCreateWithoutInvoiceItemsInput, BooksUncheckedCreateWithoutInvoiceItemsInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutInvoiceItemsInput, BooksUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type BooksUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AutorsUpdateOneRequiredWithoutBooksNestedInput
    BooksProducts?: BooksProductsUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    authorID?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUncheckedUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type InvoicesUpsertWithoutInvoiceItemsInput = {
    update: XOR<InvoicesUpdateWithoutInvoiceItemsInput, InvoicesUncheckedUpdateWithoutInvoiceItemsInput>
    create: XOR<InvoicesCreateWithoutInvoiceItemsInput, InvoicesUncheckedCreateWithoutInvoiceItemsInput>
    where?: InvoicesWhereInput
  }

  export type InvoicesUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: InvoicesWhereInput
    data: XOR<InvoicesUpdateWithoutInvoiceItemsInput, InvoicesUncheckedUpdateWithoutInvoiceItemsInput>
  }

  export type InvoicesUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutInvoicesNestedInput
    cart?: CartUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutInvoiceItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksCreateManyAuthorInput = {
    id?: string
    title: string
    isbn: string
    publicationYear: number
    genre: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BooksProducts?: BooksProductsUncheckedUpdateManyWithoutBookNestedInput
    CartItems?: CartItemsUncheckedUpdateManyWithoutBookNestedInput
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publicationYear?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesCreateManyCustomerInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    cartID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateManyCustomerInput = {
    id?: string
    createdAt?: Date | string
  }

  export type InvoicesUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutInvoicesNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CartItems?: CartItemsUpdateManyWithoutCartNestedInput
    Invoices?: InvoicesUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CartItems?: CartItemsUncheckedUpdateManyWithoutCartNestedInput
    Invoices?: InvoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsCreateManyBookInput = {
    id?: string
    price: number
    stock: number
    format: string
    warehouseID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemsCreateManyBookInput = {
    id?: string
    cartID: string
    quantity: number
    createdAt?: Date | string
  }

  export type InvoiceItemsCreateManyBookInput = {
    id?: string
    quantity: number
    price: number
    invoiceID: string
  }

  export type BooksProductsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehousesUpdateOneWithoutBooksProductsNestedInput
  }

  export type BooksProductsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouseID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouseID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoicesUpdateOneRequiredWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    invoiceID?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    invoiceID?: StringFieldUpdateOperationsInput | string
  }

  export type BooksProductsCreateManyWarehouseInput = {
    id?: string
    bookID: string
    price: number
    stock: number
    format: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BooksProductsUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BooksUpdateOneRequiredWithoutBooksProductsNestedInput
  }

  export type BooksProductsUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BooksProductsUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyCartInput = {
    id?: string
    bookID: string
    quantity: number
    createdAt?: Date | string
  }

  export type InvoicesCreateManyCartInput = {
    id?: string
    totalAmount: number
    issuedAt: Date | string
    status: string
    customerID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BooksUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoicesUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomersUpdateOneRequiredWithoutInvoicesNestedInput
    InvoiceItems?: InvoiceItemsUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItems?: InvoiceItemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoicesUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customerID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsCreateManyInvoiceInput = {
    id?: string
    bookID: string
    quantity: number
    price: number
  }

  export type InvoiceItemsUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    book?: BooksUpdateOneRequiredWithoutInvoiceItemsNestedInput
  }

  export type InvoiceItemsUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookID?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
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