// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace game. */
export namespace game {

    /** Properties of a BattleEnterPushNotify. */
    interface IBattleEnterPushNotify {

        /** BattleEnterPushNotify battleId */
        battleId?: (string|null);
    }

    /** Represents a BattleEnterPushNotify. */
    class BattleEnterPushNotify implements IBattleEnterPushNotify {

        /**
         * Constructs a new BattleEnterPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleEnterPushNotify);

        /** BattleEnterPushNotify battleId. */
        public battleId: string;

        /**
         * Creates a new BattleEnterPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEnterPushNotify instance
         */
        public static create(properties?: game.IBattleEnterPushNotify): game.BattleEnterPushNotify;

        /**
         * Encodes the specified BattleEnterPushNotify message. Does not implicitly {@link game.BattleEnterPushNotify.verify|verify} messages.
         * @param message BattleEnterPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleEnterPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleEnterPushNotify message, length delimited. Does not implicitly {@link game.BattleEnterPushNotify.verify|verify} messages.
         * @param message BattleEnterPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleEnterPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleEnterPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleEnterPushNotify;

        /**
         * Decodes a BattleEnterPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleEnterPushNotify;

        /**
         * Verifies a BattleEnterPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEnterPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEnterPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleEnterPushNotify;

        /**
         * Creates a plain object from a BattleEnterPushNotify message. Also converts values to other types if specified.
         * @param message BattleEnterPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleEnterPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEnterPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleEnterRequest. */
    interface IBattleEnterRequest {

        /** BattleEnterRequest battleId */
        battleId?: (string|null);
    }

    /** Represents a BattleEnterRequest. */
    class BattleEnterRequest implements IBattleEnterRequest {

        /**
         * Constructs a new BattleEnterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleEnterRequest);

        /** BattleEnterRequest battleId. */
        public battleId: string;

        /**
         * Creates a new BattleEnterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEnterRequest instance
         */
        public static create(properties?: game.IBattleEnterRequest): game.BattleEnterRequest;

        /**
         * Encodes the specified BattleEnterRequest message. Does not implicitly {@link game.BattleEnterRequest.verify|verify} messages.
         * @param message BattleEnterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleEnterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleEnterRequest message, length delimited. Does not implicitly {@link game.BattleEnterRequest.verify|verify} messages.
         * @param message BattleEnterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleEnterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleEnterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEnterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleEnterRequest;

        /**
         * Decodes a BattleEnterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEnterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleEnterRequest;

        /**
         * Verifies a BattleEnterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEnterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEnterRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleEnterRequest;

        /**
         * Creates a plain object from a BattleEnterRequest message. Also converts values to other types if specified.
         * @param message BattleEnterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleEnterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEnterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleEnterResponse. */
    interface IBattleEnterResponse {

        /** BattleEnterResponse errorInfo */
        errorInfo?: (string|null);

        /** BattleEnterResponse length */
        length?: (number|null);

        /** BattleEnterResponse width */
        width?: (number|null);

        /** BattleEnterResponse self */
        self?: (game.ISelf|null);

        /** BattleEnterResponse players */
        players?: (game.IPlayer[]|null);

        /** BattleEnterResponse walkFrameTime */
        walkFrameTime?: (number|null);

        /** BattleEnterResponse snakePartSpace */
        snakePartSpace?: (number|null);
    }

    /** Represents a BattleEnterResponse. */
    class BattleEnterResponse implements IBattleEnterResponse {

        /**
         * Constructs a new BattleEnterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleEnterResponse);

        /** BattleEnterResponse errorInfo. */
        public errorInfo: string;

        /** BattleEnterResponse length. */
        public length: number;

        /** BattleEnterResponse width. */
        public width: number;

        /** BattleEnterResponse self. */
        public self?: (game.ISelf|null);

        /** BattleEnterResponse players. */
        public players: game.IPlayer[];

        /** BattleEnterResponse walkFrameTime. */
        public walkFrameTime: number;

        /** BattleEnterResponse snakePartSpace. */
        public snakePartSpace: number;

        /**
         * Creates a new BattleEnterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEnterResponse instance
         */
        public static create(properties?: game.IBattleEnterResponse): game.BattleEnterResponse;

        /**
         * Encodes the specified BattleEnterResponse message. Does not implicitly {@link game.BattleEnterResponse.verify|verify} messages.
         * @param message BattleEnterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleEnterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleEnterResponse message, length delimited. Does not implicitly {@link game.BattleEnterResponse.verify|verify} messages.
         * @param message BattleEnterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleEnterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleEnterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleEnterResponse;

        /**
         * Decodes a BattleEnterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleEnterResponse;

        /**
         * Verifies a BattleEnterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEnterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEnterResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleEnterResponse;

        /**
         * Creates a plain object from a BattleEnterResponse message. Also converts values to other types if specified.
         * @param message BattleEnterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleEnterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEnterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleReadyRequest. */
    interface IBattleReadyRequest {
    }

    /** Represents a BattleReadyRequest. */
    class BattleReadyRequest implements IBattleReadyRequest {

        /**
         * Constructs a new BattleReadyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleReadyRequest);

        /**
         * Creates a new BattleReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleReadyRequest instance
         */
        public static create(properties?: game.IBattleReadyRequest): game.BattleReadyRequest;

        /**
         * Encodes the specified BattleReadyRequest message. Does not implicitly {@link game.BattleReadyRequest.verify|verify} messages.
         * @param message BattleReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleReadyRequest message, length delimited. Does not implicitly {@link game.BattleReadyRequest.verify|verify} messages.
         * @param message BattleReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleReadyRequest;

        /**
         * Decodes a BattleReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleReadyRequest;

        /**
         * Verifies a BattleReadyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleReadyRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleReadyRequest;

        /**
         * Creates a plain object from a BattleReadyRequest message. Also converts values to other types if specified.
         * @param message BattleReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleReadyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleReadyResponse. */
    interface IBattleReadyResponse {
    }

    /** Represents a BattleReadyResponse. */
    class BattleReadyResponse implements IBattleReadyResponse {

        /**
         * Constructs a new BattleReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleReadyResponse);

        /**
         * Creates a new BattleReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleReadyResponse instance
         */
        public static create(properties?: game.IBattleReadyResponse): game.BattleReadyResponse;

        /**
         * Encodes the specified BattleReadyResponse message. Does not implicitly {@link game.BattleReadyResponse.verify|verify} messages.
         * @param message BattleReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleReadyResponse message, length delimited. Does not implicitly {@link game.BattleReadyResponse.verify|verify} messages.
         * @param message BattleReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleReadyResponse;

        /**
         * Decodes a BattleReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleReadyResponse;

        /**
         * Verifies a BattleReadyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleReadyResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleReadyResponse;

        /**
         * Creates a plain object from a BattleReadyResponse message. Also converts values to other types if specified.
         * @param message BattleReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleBeginPushNotify. */
    interface IBattleBeginPushNotify {

        /** BattleBeginPushNotify players */
        players?: (game.IPlayer[]|null);

        /** BattleBeginPushNotify energies */
        energies?: (game.IEnergy[]|null);
    }

    /** Represents a BattleBeginPushNotify. */
    class BattleBeginPushNotify implements IBattleBeginPushNotify {

        /**
         * Constructs a new BattleBeginPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleBeginPushNotify);

        /** BattleBeginPushNotify players. */
        public players: game.IPlayer[];

        /** BattleBeginPushNotify energies. */
        public energies: game.IEnergy[];

        /**
         * Creates a new BattleBeginPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleBeginPushNotify instance
         */
        public static create(properties?: game.IBattleBeginPushNotify): game.BattleBeginPushNotify;

        /**
         * Encodes the specified BattleBeginPushNotify message. Does not implicitly {@link game.BattleBeginPushNotify.verify|verify} messages.
         * @param message BattleBeginPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleBeginPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleBeginPushNotify message, length delimited. Does not implicitly {@link game.BattleBeginPushNotify.verify|verify} messages.
         * @param message BattleBeginPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleBeginPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleBeginPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleBeginPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleBeginPushNotify;

        /**
         * Decodes a BattleBeginPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleBeginPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleBeginPushNotify;

        /**
         * Verifies a BattleBeginPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleBeginPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleBeginPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleBeginPushNotify;

        /**
         * Creates a plain object from a BattleBeginPushNotify message. Also converts values to other types if specified.
         * @param message BattleBeginPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleBeginPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleBeginPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleWalkRequest. */
    interface IBattleWalkRequest {

        /** BattleWalkRequest rx */
        rx?: (number|null);

        /** BattleWalkRequest ry */
        ry?: (number|null);

        /** BattleWalkRequest points */
        points?: (game.IPoint[]|null);
    }

    /** Represents a BattleWalkRequest. */
    class BattleWalkRequest implements IBattleWalkRequest {

        /**
         * Constructs a new BattleWalkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleWalkRequest);

        /** BattleWalkRequest rx. */
        public rx: number;

        /** BattleWalkRequest ry. */
        public ry: number;

        /** BattleWalkRequest points. */
        public points: game.IPoint[];

        /**
         * Creates a new BattleWalkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleWalkRequest instance
         */
        public static create(properties?: game.IBattleWalkRequest): game.BattleWalkRequest;

        /**
         * Encodes the specified BattleWalkRequest message. Does not implicitly {@link game.BattleWalkRequest.verify|verify} messages.
         * @param message BattleWalkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleWalkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleWalkRequest message, length delimited. Does not implicitly {@link game.BattleWalkRequest.verify|verify} messages.
         * @param message BattleWalkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleWalkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleWalkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleWalkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleWalkRequest;

        /**
         * Decodes a BattleWalkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleWalkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleWalkRequest;

        /**
         * Verifies a BattleWalkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleWalkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleWalkRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleWalkRequest;

        /**
         * Creates a plain object from a BattleWalkRequest message. Also converts values to other types if specified.
         * @param message BattleWalkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleWalkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleWalkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleWalkPushNotify. */
    interface IBattleWalkPushNotify {

        /** BattleWalkPushNotify uid */
        uid?: (number|Long|null);

        /** BattleWalkPushNotify points */
        points?: (game.IPoint[]|null);
    }

    /** Represents a BattleWalkPushNotify. */
    class BattleWalkPushNotify implements IBattleWalkPushNotify {

        /**
         * Constructs a new BattleWalkPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleWalkPushNotify);

        /** BattleWalkPushNotify uid. */
        public uid: (number|Long);

        /** BattleWalkPushNotify points. */
        public points: game.IPoint[];

        /**
         * Creates a new BattleWalkPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleWalkPushNotify instance
         */
        public static create(properties?: game.IBattleWalkPushNotify): game.BattleWalkPushNotify;

        /**
         * Encodes the specified BattleWalkPushNotify message. Does not implicitly {@link game.BattleWalkPushNotify.verify|verify} messages.
         * @param message BattleWalkPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleWalkPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleWalkPushNotify message, length delimited. Does not implicitly {@link game.BattleWalkPushNotify.verify|verify} messages.
         * @param message BattleWalkPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleWalkPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleWalkPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleWalkPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleWalkPushNotify;

        /**
         * Decodes a BattleWalkPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleWalkPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleWalkPushNotify;

        /**
         * Verifies a BattleWalkPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleWalkPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleWalkPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleWalkPushNotify;

        /**
         * Creates a plain object from a BattleWalkPushNotify message. Also converts values to other types if specified.
         * @param message BattleWalkPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleWalkPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleWalkPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSnakeChangePushNotify. */
    interface IBattleSnakeChangePushNotify {

        /** BattleSnakeChangePushNotify uid */
        uid?: (number|Long|null);

        /** BattleSnakeChangePushNotify attrs */
        attrs?: (game.IAttr[]|null);
    }

    /** Represents a BattleSnakeChangePushNotify. */
    class BattleSnakeChangePushNotify implements IBattleSnakeChangePushNotify {

        /**
         * Constructs a new BattleSnakeChangePushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleSnakeChangePushNotify);

        /** BattleSnakeChangePushNotify uid. */
        public uid: (number|Long);

        /** BattleSnakeChangePushNotify attrs. */
        public attrs: game.IAttr[];

        /**
         * Creates a new BattleSnakeChangePushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSnakeChangePushNotify instance
         */
        public static create(properties?: game.IBattleSnakeChangePushNotify): game.BattleSnakeChangePushNotify;

        /**
         * Encodes the specified BattleSnakeChangePushNotify message. Does not implicitly {@link game.BattleSnakeChangePushNotify.verify|verify} messages.
         * @param message BattleSnakeChangePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleSnakeChangePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSnakeChangePushNotify message, length delimited. Does not implicitly {@link game.BattleSnakeChangePushNotify.verify|verify} messages.
         * @param message BattleSnakeChangePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleSnakeChangePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSnakeChangePushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSnakeChangePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleSnakeChangePushNotify;

        /**
         * Decodes a BattleSnakeChangePushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSnakeChangePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleSnakeChangePushNotify;

        /**
         * Verifies a BattleSnakeChangePushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSnakeChangePushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSnakeChangePushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleSnakeChangePushNotify;

        /**
         * Creates a plain object from a BattleSnakeChangePushNotify message. Also converts values to other types if specified.
         * @param message BattleSnakeChangePushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleSnakeChangePushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSnakeChangePushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attr. */
    interface IAttr {

        /** Attr attrType */
        attrType?: (game.AttrType|null);

        /** Attr value */
        value?: (number|null);
    }

    /** Represents an Attr. */
    class Attr implements IAttr {

        /**
         * Constructs a new Attr.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAttr);

        /** Attr attrType. */
        public attrType: game.AttrType;

        /** Attr value. */
        public value: number;

        /**
         * Creates a new Attr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attr instance
         */
        public static create(properties?: game.IAttr): game.Attr;

        /**
         * Encodes the specified Attr message. Does not implicitly {@link game.Attr.verify|verify} messages.
         * @param message Attr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attr message, length delimited. Does not implicitly {@link game.Attr.verify|verify} messages.
         * @param message Attr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Attr;

        /**
         * Decodes an Attr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Attr;

        /**
         * Verifies an Attr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attr
         */
        public static fromObject(object: { [k: string]: any }): game.Attr;

        /**
         * Creates a plain object from an Attr message. Also converts values to other types if specified.
         * @param message Attr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Attr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AttrType enum. */
    enum AttrType {
        TYPE_INVALID = 0,
        LENGTH = 1,
        SPEED = 2,
        KILL_COUNT = 3
    }

    /** Properties of a BattleOtherEnterPushNotify. */
    interface IBattleOtherEnterPushNotify {

        /** BattleOtherEnterPushNotify players */
        players?: (game.IPlayer|null);
    }

    /** Represents a BattleOtherEnterPushNotify. */
    class BattleOtherEnterPushNotify implements IBattleOtherEnterPushNotify {

        /**
         * Constructs a new BattleOtherEnterPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleOtherEnterPushNotify);

        /** BattleOtherEnterPushNotify players. */
        public players?: (game.IPlayer|null);

        /**
         * Creates a new BattleOtherEnterPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleOtherEnterPushNotify instance
         */
        public static create(properties?: game.IBattleOtherEnterPushNotify): game.BattleOtherEnterPushNotify;

        /**
         * Encodes the specified BattleOtherEnterPushNotify message. Does not implicitly {@link game.BattleOtherEnterPushNotify.verify|verify} messages.
         * @param message BattleOtherEnterPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleOtherEnterPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleOtherEnterPushNotify message, length delimited. Does not implicitly {@link game.BattleOtherEnterPushNotify.verify|verify} messages.
         * @param message BattleOtherEnterPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleOtherEnterPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleOtherEnterPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleOtherEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleOtherEnterPushNotify;

        /**
         * Decodes a BattleOtherEnterPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleOtherEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleOtherEnterPushNotify;

        /**
         * Verifies a BattleOtherEnterPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleOtherEnterPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleOtherEnterPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleOtherEnterPushNotify;

        /**
         * Creates a plain object from a BattleOtherEnterPushNotify message. Also converts values to other types if specified.
         * @param message BattleOtherEnterPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleOtherEnterPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleOtherEnterPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLeaveRequest. */
    interface IBattleLeaveRequest {
    }

    /** Represents a BattleLeaveRequest. */
    class BattleLeaveRequest implements IBattleLeaveRequest {

        /**
         * Constructs a new BattleLeaveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleLeaveRequest);

        /**
         * Creates a new BattleLeaveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLeaveRequest instance
         */
        public static create(properties?: game.IBattleLeaveRequest): game.BattleLeaveRequest;

        /**
         * Encodes the specified BattleLeaveRequest message. Does not implicitly {@link game.BattleLeaveRequest.verify|verify} messages.
         * @param message BattleLeaveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleLeaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLeaveRequest message, length delimited. Does not implicitly {@link game.BattleLeaveRequest.verify|verify} messages.
         * @param message BattleLeaveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleLeaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLeaveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLeaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleLeaveRequest;

        /**
         * Decodes a BattleLeaveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLeaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleLeaveRequest;

        /**
         * Verifies a BattleLeaveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLeaveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLeaveRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleLeaveRequest;

        /**
         * Creates a plain object from a BattleLeaveRequest message. Also converts values to other types if specified.
         * @param message BattleLeaveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleLeaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLeaveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLeaveResponse. */
    interface IBattleLeaveResponse {
    }

    /** Represents a BattleLeaveResponse. */
    class BattleLeaveResponse implements IBattleLeaveResponse {

        /**
         * Constructs a new BattleLeaveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleLeaveResponse);

        /**
         * Creates a new BattleLeaveResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLeaveResponse instance
         */
        public static create(properties?: game.IBattleLeaveResponse): game.BattleLeaveResponse;

        /**
         * Encodes the specified BattleLeaveResponse message. Does not implicitly {@link game.BattleLeaveResponse.verify|verify} messages.
         * @param message BattleLeaveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleLeaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLeaveResponse message, length delimited. Does not implicitly {@link game.BattleLeaveResponse.verify|verify} messages.
         * @param message BattleLeaveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleLeaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLeaveResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLeaveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleLeaveResponse;

        /**
         * Decodes a BattleLeaveResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLeaveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleLeaveResponse;

        /**
         * Verifies a BattleLeaveResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLeaveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLeaveResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleLeaveResponse;

        /**
         * Creates a plain object from a BattleLeaveResponse message. Also converts values to other types if specified.
         * @param message BattleLeaveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleLeaveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLeaveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLeavePushNotify. */
    interface IBattleLeavePushNotify {

        /** BattleLeavePushNotify uid */
        uid?: (number|Long|null);
    }

    /** Represents a BattleLeavePushNotify. */
    class BattleLeavePushNotify implements IBattleLeavePushNotify {

        /**
         * Constructs a new BattleLeavePushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleLeavePushNotify);

        /** BattleLeavePushNotify uid. */
        public uid: (number|Long);

        /**
         * Creates a new BattleLeavePushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLeavePushNotify instance
         */
        public static create(properties?: game.IBattleLeavePushNotify): game.BattleLeavePushNotify;

        /**
         * Encodes the specified BattleLeavePushNotify message. Does not implicitly {@link game.BattleLeavePushNotify.verify|verify} messages.
         * @param message BattleLeavePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleLeavePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLeavePushNotify message, length delimited. Does not implicitly {@link game.BattleLeavePushNotify.verify|verify} messages.
         * @param message BattleLeavePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleLeavePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLeavePushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLeavePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleLeavePushNotify;

        /**
         * Decodes a BattleLeavePushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLeavePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleLeavePushNotify;

        /**
         * Verifies a BattleLeavePushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLeavePushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLeavePushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleLeavePushNotify;

        /**
         * Creates a plain object from a BattleLeavePushNotify message. Also converts values to other types if specified.
         * @param message BattleLeavePushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleLeavePushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLeavePushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleDeathPushNotify. */
    interface IBattleDeathPushNotify {

        /** BattleDeathPushNotify uid */
        uid?: (number|Long|null);

        /** BattleDeathPushNotify energies */
        energies?: (game.IEnergy[]|null);

        /** BattleDeathPushNotify deathType */
        deathType?: (game.BattleDeathPushNotify.Type|null);

        /** BattleDeathPushNotify killerName */
        killerName?: (string|null);

        /** BattleDeathPushNotify reviveCount */
        reviveCount?: (number|null);

        /** BattleDeathPushNotify snakeLength */
        snakeLength?: (number|null);
    }

    /** Represents a BattleDeathPushNotify. */
    class BattleDeathPushNotify implements IBattleDeathPushNotify {

        /**
         * Constructs a new BattleDeathPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleDeathPushNotify);

        /** BattleDeathPushNotify uid. */
        public uid: (number|Long);

        /** BattleDeathPushNotify energies. */
        public energies: game.IEnergy[];

        /** BattleDeathPushNotify deathType. */
        public deathType: game.BattleDeathPushNotify.Type;

        /** BattleDeathPushNotify killerName. */
        public killerName: string;

        /** BattleDeathPushNotify reviveCount. */
        public reviveCount: number;

        /** BattleDeathPushNotify snakeLength. */
        public snakeLength: number;

        /**
         * Creates a new BattleDeathPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleDeathPushNotify instance
         */
        public static create(properties?: game.IBattleDeathPushNotify): game.BattleDeathPushNotify;

        /**
         * Encodes the specified BattleDeathPushNotify message. Does not implicitly {@link game.BattleDeathPushNotify.verify|verify} messages.
         * @param message BattleDeathPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleDeathPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleDeathPushNotify message, length delimited. Does not implicitly {@link game.BattleDeathPushNotify.verify|verify} messages.
         * @param message BattleDeathPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleDeathPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleDeathPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleDeathPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleDeathPushNotify;

        /**
         * Decodes a BattleDeathPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleDeathPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleDeathPushNotify;

        /**
         * Verifies a BattleDeathPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleDeathPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleDeathPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleDeathPushNotify;

        /**
         * Creates a plain object from a BattleDeathPushNotify message. Also converts values to other types if specified.
         * @param message BattleDeathPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleDeathPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleDeathPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BattleDeathPushNotify {

        /** Type enum. */
        enum Type {
            DEATH_ERROR = 0,
            COLLISION = 1,
            KILLED = 2
        }
    }

    /** Properties of a BattleLookAdvertReviveRequest. */
    interface IBattleLookAdvertReviveRequest {
    }

    /** Represents a BattleLookAdvertReviveRequest. */
    class BattleLookAdvertReviveRequest implements IBattleLookAdvertReviveRequest {

        /**
         * Constructs a new BattleLookAdvertReviveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleLookAdvertReviveRequest);

        /**
         * Creates a new BattleLookAdvertReviveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLookAdvertReviveRequest instance
         */
        public static create(properties?: game.IBattleLookAdvertReviveRequest): game.BattleLookAdvertReviveRequest;

        /**
         * Encodes the specified BattleLookAdvertReviveRequest message. Does not implicitly {@link game.BattleLookAdvertReviveRequest.verify|verify} messages.
         * @param message BattleLookAdvertReviveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleLookAdvertReviveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLookAdvertReviveRequest message, length delimited. Does not implicitly {@link game.BattleLookAdvertReviveRequest.verify|verify} messages.
         * @param message BattleLookAdvertReviveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleLookAdvertReviveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLookAdvertReviveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLookAdvertReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleLookAdvertReviveRequest;

        /**
         * Decodes a BattleLookAdvertReviveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLookAdvertReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleLookAdvertReviveRequest;

        /**
         * Verifies a BattleLookAdvertReviveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLookAdvertReviveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLookAdvertReviveRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleLookAdvertReviveRequest;

        /**
         * Creates a plain object from a BattleLookAdvertReviveRequest message. Also converts values to other types if specified.
         * @param message BattleLookAdvertReviveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleLookAdvertReviveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLookAdvertReviveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleLookAdvertReviveResponse. */
    interface IBattleLookAdvertReviveResponse {

        /** BattleLookAdvertReviveResponse self */
        self?: (game.ISelf|null);
    }

    /** Represents a BattleLookAdvertReviveResponse. */
    class BattleLookAdvertReviveResponse implements IBattleLookAdvertReviveResponse {

        /**
         * Constructs a new BattleLookAdvertReviveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleLookAdvertReviveResponse);

        /** BattleLookAdvertReviveResponse self. */
        public self?: (game.ISelf|null);

        /**
         * Creates a new BattleLookAdvertReviveResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleLookAdvertReviveResponse instance
         */
        public static create(properties?: game.IBattleLookAdvertReviveResponse): game.BattleLookAdvertReviveResponse;

        /**
         * Encodes the specified BattleLookAdvertReviveResponse message. Does not implicitly {@link game.BattleLookAdvertReviveResponse.verify|verify} messages.
         * @param message BattleLookAdvertReviveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleLookAdvertReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleLookAdvertReviveResponse message, length delimited. Does not implicitly {@link game.BattleLookAdvertReviveResponse.verify|verify} messages.
         * @param message BattleLookAdvertReviveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleLookAdvertReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleLookAdvertReviveResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleLookAdvertReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleLookAdvertReviveResponse;

        /**
         * Decodes a BattleLookAdvertReviveResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleLookAdvertReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleLookAdvertReviveResponse;

        /**
         * Verifies a BattleLookAdvertReviveResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleLookAdvertReviveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleLookAdvertReviveResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleLookAdvertReviveResponse;

        /**
         * Creates a plain object from a BattleLookAdvertReviveResponse message. Also converts values to other types if specified.
         * @param message BattleLookAdvertReviveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleLookAdvertReviveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleLookAdvertReviveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleRevivePushNotify. */
    interface IBattleRevivePushNotify {

        /** BattleRevivePushNotify player */
        player?: (game.IPlayer|null);
    }

    /** Represents a BattleRevivePushNotify. */
    class BattleRevivePushNotify implements IBattleRevivePushNotify {

        /**
         * Constructs a new BattleRevivePushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleRevivePushNotify);

        /** BattleRevivePushNotify player. */
        public player?: (game.IPlayer|null);

        /**
         * Creates a new BattleRevivePushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleRevivePushNotify instance
         */
        public static create(properties?: game.IBattleRevivePushNotify): game.BattleRevivePushNotify;

        /**
         * Encodes the specified BattleRevivePushNotify message. Does not implicitly {@link game.BattleRevivePushNotify.verify|verify} messages.
         * @param message BattleRevivePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleRevivePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleRevivePushNotify message, length delimited. Does not implicitly {@link game.BattleRevivePushNotify.verify|verify} messages.
         * @param message BattleRevivePushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleRevivePushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleRevivePushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleRevivePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleRevivePushNotify;

        /**
         * Decodes a BattleRevivePushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleRevivePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleRevivePushNotify;

        /**
         * Verifies a BattleRevivePushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleRevivePushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleRevivePushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleRevivePushNotify;

        /**
         * Creates a plain object from a BattleRevivePushNotify message. Also converts values to other types if specified.
         * @param message BattleRevivePushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleRevivePushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleRevivePushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleFlushEnergyPushNotify. */
    interface IBattleFlushEnergyPushNotify {

        /** BattleFlushEnergyPushNotify energies */
        energies?: (game.IEnergy[]|null);
    }

    /** Represents a BattleFlushEnergyPushNotify. */
    class BattleFlushEnergyPushNotify implements IBattleFlushEnergyPushNotify {

        /**
         * Constructs a new BattleFlushEnergyPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleFlushEnergyPushNotify);

        /** BattleFlushEnergyPushNotify energies. */
        public energies: game.IEnergy[];

        /**
         * Creates a new BattleFlushEnergyPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleFlushEnergyPushNotify instance
         */
        public static create(properties?: game.IBattleFlushEnergyPushNotify): game.BattleFlushEnergyPushNotify;

        /**
         * Encodes the specified BattleFlushEnergyPushNotify message. Does not implicitly {@link game.BattleFlushEnergyPushNotify.verify|verify} messages.
         * @param message BattleFlushEnergyPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleFlushEnergyPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleFlushEnergyPushNotify message, length delimited. Does not implicitly {@link game.BattleFlushEnergyPushNotify.verify|verify} messages.
         * @param message BattleFlushEnergyPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleFlushEnergyPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleFlushEnergyPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleFlushEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleFlushEnergyPushNotify;

        /**
         * Decodes a BattleFlushEnergyPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleFlushEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleFlushEnergyPushNotify;

        /**
         * Verifies a BattleFlushEnergyPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleFlushEnergyPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleFlushEnergyPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleFlushEnergyPushNotify;

        /**
         * Creates a plain object from a BattleFlushEnergyPushNotify message. Also converts values to other types if specified.
         * @param message BattleFlushEnergyPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleFlushEnergyPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleFlushEnergyPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleTakeEnergyPushNotify. */
    interface IBattleTakeEnergyPushNotify {

        /** BattleTakeEnergyPushNotify energyIds */
        energyIds?: ((number|Long)[]|null);

        /** BattleTakeEnergyPushNotify uid */
        uid?: (number|Long|null);
    }

    /** Represents a BattleTakeEnergyPushNotify. */
    class BattleTakeEnergyPushNotify implements IBattleTakeEnergyPushNotify {

        /**
         * Constructs a new BattleTakeEnergyPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleTakeEnergyPushNotify);

        /** BattleTakeEnergyPushNotify energyIds. */
        public energyIds: (number|Long)[];

        /** BattleTakeEnergyPushNotify uid. */
        public uid: (number|Long);

        /**
         * Creates a new BattleTakeEnergyPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleTakeEnergyPushNotify instance
         */
        public static create(properties?: game.IBattleTakeEnergyPushNotify): game.BattleTakeEnergyPushNotify;

        /**
         * Encodes the specified BattleTakeEnergyPushNotify message. Does not implicitly {@link game.BattleTakeEnergyPushNotify.verify|verify} messages.
         * @param message BattleTakeEnergyPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleTakeEnergyPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleTakeEnergyPushNotify message, length delimited. Does not implicitly {@link game.BattleTakeEnergyPushNotify.verify|verify} messages.
         * @param message BattleTakeEnergyPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleTakeEnergyPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleTakeEnergyPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleTakeEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleTakeEnergyPushNotify;

        /**
         * Decodes a BattleTakeEnergyPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleTakeEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleTakeEnergyPushNotify;

        /**
         * Verifies a BattleTakeEnergyPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleTakeEnergyPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleTakeEnergyPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleTakeEnergyPushNotify;

        /**
         * Creates a plain object from a BattleTakeEnergyPushNotify message. Also converts values to other types if specified.
         * @param message BattleTakeEnergyPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleTakeEnergyPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleTakeEnergyPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleOverRequest. */
    interface IBattleOverRequest {
    }

    /** Represents a BattleOverRequest. */
    class BattleOverRequest implements IBattleOverRequest {

        /**
         * Constructs a new BattleOverRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleOverRequest);

        /**
         * Creates a new BattleOverRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleOverRequest instance
         */
        public static create(properties?: game.IBattleOverRequest): game.BattleOverRequest;

        /**
         * Encodes the specified BattleOverRequest message. Does not implicitly {@link game.BattleOverRequest.verify|verify} messages.
         * @param message BattleOverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleOverRequest message, length delimited. Does not implicitly {@link game.BattleOverRequest.verify|verify} messages.
         * @param message BattleOverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleOverRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleOverRequest;

        /**
         * Decodes a BattleOverRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleOverRequest;

        /**
         * Verifies a BattleOverRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleOverRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleOverRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleOverRequest;

        /**
         * Creates a plain object from a BattleOverRequest message. Also converts values to other types if specified.
         * @param message BattleOverRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleOverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleOverRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleOverResponse. */
    interface IBattleOverResponse {

        /** BattleOverResponse length */
        length?: (number|null);

        /** BattleOverResponse killCount */
        killCount?: (number|null);

        /** BattleOverResponse surpass */
        surpass?: (number|null);
    }

    /** Represents a BattleOverResponse. */
    class BattleOverResponse implements IBattleOverResponse {

        /**
         * Constructs a new BattleOverResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleOverResponse);

        /** BattleOverResponse length. */
        public length: number;

        /** BattleOverResponse killCount. */
        public killCount: number;

        /** BattleOverResponse surpass. */
        public surpass: number;

        /**
         * Creates a new BattleOverResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleOverResponse instance
         */
        public static create(properties?: game.IBattleOverResponse): game.BattleOverResponse;

        /**
         * Encodes the specified BattleOverResponse message. Does not implicitly {@link game.BattleOverResponse.verify|verify} messages.
         * @param message BattleOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleOverResponse message, length delimited. Does not implicitly {@link game.BattleOverResponse.verify|verify} messages.
         * @param message BattleOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleOverResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleOverResponse;

        /**
         * Decodes a BattleOverResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleOverResponse;

        /**
         * Verifies a BattleOverResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleOverResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleOverResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleOverResponse;

        /**
         * Creates a plain object from a BattleOverResponse message. Also converts values to other types if specified.
         * @param message BattleOverResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleOverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleOverResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSnakeSpeedUpRequest. */
    interface IBattleSnakeSpeedUpRequest {

        /** BattleSnakeSpeedUpRequest op */
        op?: (game.BattleSnakeSpeedUpRequest.OpType|null);
    }

    /** Represents a BattleSnakeSpeedUpRequest. */
    class BattleSnakeSpeedUpRequest implements IBattleSnakeSpeedUpRequest {

        /**
         * Constructs a new BattleSnakeSpeedUpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleSnakeSpeedUpRequest);

        /** BattleSnakeSpeedUpRequest op. */
        public op: game.BattleSnakeSpeedUpRequest.OpType;

        /**
         * Creates a new BattleSnakeSpeedUpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSnakeSpeedUpRequest instance
         */
        public static create(properties?: game.IBattleSnakeSpeedUpRequest): game.BattleSnakeSpeedUpRequest;

        /**
         * Encodes the specified BattleSnakeSpeedUpRequest message. Does not implicitly {@link game.BattleSnakeSpeedUpRequest.verify|verify} messages.
         * @param message BattleSnakeSpeedUpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleSnakeSpeedUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSnakeSpeedUpRequest message, length delimited. Does not implicitly {@link game.BattleSnakeSpeedUpRequest.verify|verify} messages.
         * @param message BattleSnakeSpeedUpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleSnakeSpeedUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSnakeSpeedUpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSnakeSpeedUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleSnakeSpeedUpRequest;

        /**
         * Decodes a BattleSnakeSpeedUpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSnakeSpeedUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleSnakeSpeedUpRequest;

        /**
         * Verifies a BattleSnakeSpeedUpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSnakeSpeedUpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSnakeSpeedUpRequest
         */
        public static fromObject(object: { [k: string]: any }): game.BattleSnakeSpeedUpRequest;

        /**
         * Creates a plain object from a BattleSnakeSpeedUpRequest message. Also converts values to other types if specified.
         * @param message BattleSnakeSpeedUpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleSnakeSpeedUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSnakeSpeedUpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BattleSnakeSpeedUpRequest {

        /** OpType enum. */
        enum OpType {
            ERROR = 0,
            SPEED = 1,
            STOP = 2
        }
    }

    /** Properties of a BattleSnakeSpeedUpResponse. */
    interface IBattleSnakeSpeedUpResponse {
    }

    /** Represents a BattleSnakeSpeedUpResponse. */
    class BattleSnakeSpeedUpResponse implements IBattleSnakeSpeedUpResponse {

        /**
         * Constructs a new BattleSnakeSpeedUpResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleSnakeSpeedUpResponse);

        /**
         * Creates a new BattleSnakeSpeedUpResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSnakeSpeedUpResponse instance
         */
        public static create(properties?: game.IBattleSnakeSpeedUpResponse): game.BattleSnakeSpeedUpResponse;

        /**
         * Encodes the specified BattleSnakeSpeedUpResponse message. Does not implicitly {@link game.BattleSnakeSpeedUpResponse.verify|verify} messages.
         * @param message BattleSnakeSpeedUpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleSnakeSpeedUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSnakeSpeedUpResponse message, length delimited. Does not implicitly {@link game.BattleSnakeSpeedUpResponse.verify|verify} messages.
         * @param message BattleSnakeSpeedUpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleSnakeSpeedUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSnakeSpeedUpResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSnakeSpeedUpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleSnakeSpeedUpResponse;

        /**
         * Decodes a BattleSnakeSpeedUpResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSnakeSpeedUpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleSnakeSpeedUpResponse;

        /**
         * Verifies a BattleSnakeSpeedUpResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSnakeSpeedUpResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSnakeSpeedUpResponse
         */
        public static fromObject(object: { [k: string]: any }): game.BattleSnakeSpeedUpResponse;

        /**
         * Creates a plain object from a BattleSnakeSpeedUpResponse message. Also converts values to other types if specified.
         * @param message BattleSnakeSpeedUpResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleSnakeSpeedUpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSnakeSpeedUpResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSnakeEffectPushNotify. */
    interface IBattleSnakeEffectPushNotify {

        /** BattleSnakeEffectPushNotify op */
        op?: (game.BattleSnakeEffectPushNotify.OpType|null);

        /** BattleSnakeEffectPushNotify uid */
        uid?: (number|Long|null);

        /** BattleSnakeEffectPushNotify effect */
        effect?: (game.BattleSnakeEffectPushNotify.EffectType|null);
    }

    /** Represents a BattleSnakeEffectPushNotify. */
    class BattleSnakeEffectPushNotify implements IBattleSnakeEffectPushNotify {

        /**
         * Constructs a new BattleSnakeEffectPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleSnakeEffectPushNotify);

        /** BattleSnakeEffectPushNotify op. */
        public op: game.BattleSnakeEffectPushNotify.OpType;

        /** BattleSnakeEffectPushNotify uid. */
        public uid: (number|Long);

        /** BattleSnakeEffectPushNotify effect. */
        public effect: game.BattleSnakeEffectPushNotify.EffectType;

        /**
         * Creates a new BattleSnakeEffectPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSnakeEffectPushNotify instance
         */
        public static create(properties?: game.IBattleSnakeEffectPushNotify): game.BattleSnakeEffectPushNotify;

        /**
         * Encodes the specified BattleSnakeEffectPushNotify message. Does not implicitly {@link game.BattleSnakeEffectPushNotify.verify|verify} messages.
         * @param message BattleSnakeEffectPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleSnakeEffectPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleSnakeEffectPushNotify message, length delimited. Does not implicitly {@link game.BattleSnakeEffectPushNotify.verify|verify} messages.
         * @param message BattleSnakeEffectPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleSnakeEffectPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleSnakeEffectPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSnakeEffectPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleSnakeEffectPushNotify;

        /**
         * Decodes a BattleSnakeEffectPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSnakeEffectPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleSnakeEffectPushNotify;

        /**
         * Verifies a BattleSnakeEffectPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSnakeEffectPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSnakeEffectPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleSnakeEffectPushNotify;

        /**
         * Creates a plain object from a BattleSnakeEffectPushNotify message. Also converts values to other types if specified.
         * @param message BattleSnakeEffectPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleSnakeEffectPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSnakeEffectPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BattleSnakeEffectPushNotify {

        /** OpType enum. */
        enum OpType {
            ERROR = 0,
            ADD = 1,
            REMOVE = 2
        }

        /** EffectType enum. */
        enum EffectType {
            ILLEGAL = 0,
            SPEED = 1,
            PROTECT = 2
        }
    }

    /** Properties of a BattleKillBroadcastPushNotify. */
    interface IBattleKillBroadcastPushNotify {

        /** BattleKillBroadcastPushNotify killName */
        killName?: (string|null);

        /** BattleKillBroadcastPushNotify deathName */
        deathName?: (string|null);

        /** BattleKillBroadcastPushNotify killType */
        killType?: (game.BattleKillBroadcastPushNotify.KillType|null);
    }

    /** Represents a BattleKillBroadcastPushNotify. */
    class BattleKillBroadcastPushNotify implements IBattleKillBroadcastPushNotify {

        /**
         * Constructs a new BattleKillBroadcastPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleKillBroadcastPushNotify);

        /** BattleKillBroadcastPushNotify killName. */
        public killName: string;

        /** BattleKillBroadcastPushNotify deathName. */
        public deathName: string;

        /** BattleKillBroadcastPushNotify killType. */
        public killType: game.BattleKillBroadcastPushNotify.KillType;

        /**
         * Creates a new BattleKillBroadcastPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleKillBroadcastPushNotify instance
         */
        public static create(properties?: game.IBattleKillBroadcastPushNotify): game.BattleKillBroadcastPushNotify;

        /**
         * Encodes the specified BattleKillBroadcastPushNotify message. Does not implicitly {@link game.BattleKillBroadcastPushNotify.verify|verify} messages.
         * @param message BattleKillBroadcastPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleKillBroadcastPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleKillBroadcastPushNotify message, length delimited. Does not implicitly {@link game.BattleKillBroadcastPushNotify.verify|verify} messages.
         * @param message BattleKillBroadcastPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleKillBroadcastPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleKillBroadcastPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleKillBroadcastPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleKillBroadcastPushNotify;

        /**
         * Decodes a BattleKillBroadcastPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleKillBroadcastPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleKillBroadcastPushNotify;

        /**
         * Verifies a BattleKillBroadcastPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleKillBroadcastPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleKillBroadcastPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleKillBroadcastPushNotify;

        /**
         * Creates a plain object from a BattleKillBroadcastPushNotify message. Also converts values to other types if specified.
         * @param message BattleKillBroadcastPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleKillBroadcastPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleKillBroadcastPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BattleKillBroadcastPushNotify {

        /** KillType enum. */
        enum KillType {
            KILL = 0,
            FIRST = 1,
            THREE = 2,
            FOUR = 3,
            FIVE = 5,
            SIX = 6,
            SEVEN = 7,
            EIGHT = 8,
            STOP = 9,
            CRAZY = 10,
            RUNAWAY = 11
        }
    }

    /** Properties of a BattleRankPushNotify. */
    interface IBattleRankPushNotify {

        /** BattleRankPushNotify dayBest */
        dayBest?: (game.IRankItem|null);

        /** BattleRankPushNotify ranks */
        ranks?: (game.IRankItem[]|null);
    }

    /** Represents a BattleRankPushNotify. */
    class BattleRankPushNotify implements IBattleRankPushNotify {

        /**
         * Constructs a new BattleRankPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBattleRankPushNotify);

        /** BattleRankPushNotify dayBest. */
        public dayBest?: (game.IRankItem|null);

        /** BattleRankPushNotify ranks. */
        public ranks: game.IRankItem[];

        /**
         * Creates a new BattleRankPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleRankPushNotify instance
         */
        public static create(properties?: game.IBattleRankPushNotify): game.BattleRankPushNotify;

        /**
         * Encodes the specified BattleRankPushNotify message. Does not implicitly {@link game.BattleRankPushNotify.verify|verify} messages.
         * @param message BattleRankPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBattleRankPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BattleRankPushNotify message, length delimited. Does not implicitly {@link game.BattleRankPushNotify.verify|verify} messages.
         * @param message BattleRankPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBattleRankPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleRankPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleRankPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BattleRankPushNotify;

        /**
         * Decodes a BattleRankPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleRankPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BattleRankPushNotify;

        /**
         * Verifies a BattleRankPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleRankPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleRankPushNotify
         */
        public static fromObject(object: { [k: string]: any }): game.BattleRankPushNotify;

        /**
         * Creates a plain object from a BattleRankPushNotify message. Also converts values to other types if specified.
         * @param message BattleRankPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BattleRankPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleRankPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBattleMsgRequest. */
    interface IUserBattleMsgRequest {

        /** UserBattleMsgRequest length */
        length?: (number|null);

        /** UserBattleMsgRequest killCount */
        killCount?: (number|null);
    }

    /** Represents a UserBattleMsgRequest. */
    class UserBattleMsgRequest implements IUserBattleMsgRequest {

        /**
         * Constructs a new UserBattleMsgRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUserBattleMsgRequest);

        /** UserBattleMsgRequest length. */
        public length: number;

        /** UserBattleMsgRequest killCount. */
        public killCount: number;

        /**
         * Creates a new UserBattleMsgRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBattleMsgRequest instance
         */
        public static create(properties?: game.IUserBattleMsgRequest): game.UserBattleMsgRequest;

        /**
         * Encodes the specified UserBattleMsgRequest message. Does not implicitly {@link game.UserBattleMsgRequest.verify|verify} messages.
         * @param message UserBattleMsgRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUserBattleMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBattleMsgRequest message, length delimited. Does not implicitly {@link game.UserBattleMsgRequest.verify|verify} messages.
         * @param message UserBattleMsgRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUserBattleMsgRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBattleMsgRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBattleMsgRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserBattleMsgRequest;

        /**
         * Decodes a UserBattleMsgRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBattleMsgRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserBattleMsgRequest;

        /**
         * Verifies a UserBattleMsgRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBattleMsgRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBattleMsgRequest
         */
        public static fromObject(object: { [k: string]: any }): game.UserBattleMsgRequest;

        /**
         * Creates a plain object from a UserBattleMsgRequest message. Also converts values to other types if specified.
         * @param message UserBattleMsgRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UserBattleMsgRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBattleMsgRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserBattleMsgResponse. */
    interface IUserBattleMsgResponse {

        /** UserBattleMsgResponse length */
        length?: (number|null);

        /** UserBattleMsgResponse killCount */
        killCount?: (number|null);
    }

    /** Represents a UserBattleMsgResponse. */
    class UserBattleMsgResponse implements IUserBattleMsgResponse {

        /**
         * Constructs a new UserBattleMsgResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUserBattleMsgResponse);

        /** UserBattleMsgResponse length. */
        public length: number;

        /** UserBattleMsgResponse killCount. */
        public killCount: number;

        /**
         * Creates a new UserBattleMsgResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserBattleMsgResponse instance
         */
        public static create(properties?: game.IUserBattleMsgResponse): game.UserBattleMsgResponse;

        /**
         * Encodes the specified UserBattleMsgResponse message. Does not implicitly {@link game.UserBattleMsgResponse.verify|verify} messages.
         * @param message UserBattleMsgResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUserBattleMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserBattleMsgResponse message, length delimited. Does not implicitly {@link game.UserBattleMsgResponse.verify|verify} messages.
         * @param message UserBattleMsgResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUserBattleMsgResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserBattleMsgResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserBattleMsgResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserBattleMsgResponse;

        /**
         * Decodes a UserBattleMsgResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserBattleMsgResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserBattleMsgResponse;

        /**
         * Verifies a UserBattleMsgResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserBattleMsgResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserBattleMsgResponse
         */
        public static fromObject(object: { [k: string]: any }): game.UserBattleMsgResponse;

        /**
         * Creates a plain object from a UserBattleMsgResponse message. Also converts values to other types if specified.
         * @param message UserBattleMsgResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UserBattleMsgResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserBattleMsgResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReviveRequest. */
    interface IUserReviveRequest {
    }

    /** Represents a UserReviveRequest. */
    class UserReviveRequest implements IUserReviveRequest {

        /**
         * Constructs a new UserReviveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUserReviveRequest);

        /**
         * Creates a new UserReviveRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReviveRequest instance
         */
        public static create(properties?: game.IUserReviveRequest): game.UserReviveRequest;

        /**
         * Encodes the specified UserReviveRequest message. Does not implicitly {@link game.UserReviveRequest.verify|verify} messages.
         * @param message UserReviveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUserReviveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReviveRequest message, length delimited. Does not implicitly {@link game.UserReviveRequest.verify|verify} messages.
         * @param message UserReviveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUserReviveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReviveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserReviveRequest;

        /**
         * Decodes a UserReviveRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserReviveRequest;

        /**
         * Verifies a UserReviveRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReviveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReviveRequest
         */
        public static fromObject(object: { [k: string]: any }): game.UserReviveRequest;

        /**
         * Creates a plain object from a UserReviveRequest message. Also converts values to other types if specified.
         * @param message UserReviveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UserReviveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReviveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReviveResponse. */
    interface IUserReviveResponse {

        /** UserReviveResponse result */
        result?: (number|null);

        /** UserReviveResponse coin */
        coin?: (number|null);
    }

    /** Represents a UserReviveResponse. */
    class UserReviveResponse implements IUserReviveResponse {

        /**
         * Constructs a new UserReviveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IUserReviveResponse);

        /** UserReviveResponse result. */
        public result: number;

        /** UserReviveResponse coin. */
        public coin: number;

        /**
         * Creates a new UserReviveResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReviveResponse instance
         */
        public static create(properties?: game.IUserReviveResponse): game.UserReviveResponse;

        /**
         * Encodes the specified UserReviveResponse message. Does not implicitly {@link game.UserReviveResponse.verify|verify} messages.
         * @param message UserReviveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IUserReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReviveResponse message, length delimited. Does not implicitly {@link game.UserReviveResponse.verify|verify} messages.
         * @param message UserReviveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IUserReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReviveResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.UserReviveResponse;

        /**
         * Decodes a UserReviveResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.UserReviveResponse;

        /**
         * Verifies a UserReviveResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReviveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReviveResponse
         */
        public static fromObject(object: { [k: string]: any }): game.UserReviveResponse;

        /**
         * Creates a plain object from a UserReviveResponse message. Also converts values to other types if specified.
         * @param message UserReviveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.UserReviveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReviveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverRequest. */
    interface IGameOverRequest {

        /** GameOverRequest length */
        length?: (number|null);

        /** GameOverRequest killCount */
        killCount?: (number|null);

        /** GameOverRequest lookAdCount */
        lookAdCount?: (number|null);
    }

    /** Represents a GameOverRequest. */
    class GameOverRequest implements IGameOverRequest {

        /**
         * Constructs a new GameOverRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameOverRequest);

        /** GameOverRequest length. */
        public length: number;

        /** GameOverRequest killCount. */
        public killCount: number;

        /** GameOverRequest lookAdCount. */
        public lookAdCount: number;

        /**
         * Creates a new GameOverRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverRequest instance
         */
        public static create(properties?: game.IGameOverRequest): game.GameOverRequest;

        /**
         * Encodes the specified GameOverRequest message. Does not implicitly {@link game.GameOverRequest.verify|verify} messages.
         * @param message GameOverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameOverRequest message, length delimited. Does not implicitly {@link game.GameOverRequest.verify|verify} messages.
         * @param message GameOverRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameOverRequest;

        /**
         * Decodes a GameOverRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameOverRequest;

        /**
         * Verifies a GameOverRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverRequest
         */
        public static fromObject(object: { [k: string]: any }): game.GameOverRequest;

        /**
         * Creates a plain object from a GameOverRequest message. Also converts values to other types if specified.
         * @param message GameOverRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameOverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverResponse. */
    interface IGameOverResponse {

        /** GameOverResponse length */
        length?: (number|null);

        /** GameOverResponse killCount */
        killCount?: (number|null);

        /** GameOverResponse surpass */
        surpass?: (number|null);

        /** GameOverResponse coin */
        coin?: (number|null);

        /** GameOverResponse isShare */
        isShare?: (boolean|null);

        /** GameOverResponse lookAdRewardsKey */
        lookAdRewardsKey?: (string|null);
    }

    /** Represents a GameOverResponse. */
    class GameOverResponse implements IGameOverResponse {

        /**
         * Constructs a new GameOverResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameOverResponse);

        /** GameOverResponse length. */
        public length: number;

        /** GameOverResponse killCount. */
        public killCount: number;

        /** GameOverResponse surpass. */
        public surpass: number;

        /** GameOverResponse coin. */
        public coin: number;

        /** GameOverResponse isShare. */
        public isShare: boolean;

        /** GameOverResponse lookAdRewardsKey. */
        public lookAdRewardsKey: string;

        /**
         * Creates a new GameOverResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverResponse instance
         */
        public static create(properties?: game.IGameOverResponse): game.GameOverResponse;

        /**
         * Encodes the specified GameOverResponse message. Does not implicitly {@link game.GameOverResponse.verify|verify} messages.
         * @param message GameOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameOverResponse message, length delimited. Does not implicitly {@link game.GameOverResponse.verify|verify} messages.
         * @param message GameOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameOverResponse;

        /**
         * Decodes a GameOverResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameOverResponse;

        /**
         * Verifies a GameOverResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverResponse
         */
        public static fromObject(object: { [k: string]: any }): game.GameOverResponse;

        /**
         * Creates a plain object from a GameOverResponse message. Also converts values to other types if specified.
         * @param message GameOverResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameOverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Self. */
    interface ISelf {

        /** Self snakeLength */
        snakeLength?: (number|null);

        /** Self skinId */
        skinId?: (string|null);

        /** Self points */
        points?: (game.IPoint[]|null);

        /** Self snakeSpeed */
        snakeSpeed?: (number|null);
    }

    /** Represents a Self. */
    class Self implements ISelf {

        /**
         * Constructs a new Self.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ISelf);

        /** Self snakeLength. */
        public snakeLength: number;

        /** Self skinId. */
        public skinId: string;

        /** Self points. */
        public points: game.IPoint[];

        /** Self snakeSpeed. */
        public snakeSpeed: number;

        /**
         * Creates a new Self instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Self instance
         */
        public static create(properties?: game.ISelf): game.Self;

        /**
         * Encodes the specified Self message. Does not implicitly {@link game.Self.verify|verify} messages.
         * @param message Self message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ISelf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Self message, length delimited. Does not implicitly {@link game.Self.verify|verify} messages.
         * @param message Self message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ISelf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Self message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Self
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Self;

        /**
         * Decodes a Self message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Self
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Self;

        /**
         * Verifies a Self message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Self message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Self
         */
        public static fromObject(object: { [k: string]: any }): game.Self;

        /**
         * Creates a plain object from a Self message. Also converts values to other types if specified.
         * @param message Self
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Self, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Self to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player uid */
        uid?: (number|Long|null);

        /** Player name */
        name?: (string|null);

        /** Player skinId */
        skinId?: (string|null);

        /** Player snakeLength */
        snakeLength?: (number|null);

        /** Player points */
        points?: (game.IPoint[]|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayer);

        /** Player uid. */
        public uid: (number|Long);

        /** Player name. */
        public name: string;

        /** Player skinId. */
        public skinId: string;

        /** Player snakeLength. */
        public snakeLength: number;

        /** Player points. */
        public points: game.IPoint[];

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: game.IPlayer): game.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): game.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point px */
        px?: (number|null);

        /** Point py */
        py?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPoint);

        /** Point px. */
        public px: number;

        /** Point py. */
        public py: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: game.IPoint): game.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link game.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link game.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): game.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Energy. */
    interface IEnergy {

        /** Energy instanceId */
        instanceId?: (number|Long|null);

        /** Energy point */
        point?: (game.IPoint|null);

        /** Energy value */
        value?: (number|null);
    }

    /** Represents an Energy. */
    class Energy implements IEnergy {

        /**
         * Constructs a new Energy.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IEnergy);

        /** Energy instanceId. */
        public instanceId: (number|Long);

        /** Energy point. */
        public point?: (game.IPoint|null);

        /** Energy value. */
        public value: number;

        /**
         * Creates a new Energy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Energy instance
         */
        public static create(properties?: game.IEnergy): game.Energy;

        /**
         * Encodes the specified Energy message. Does not implicitly {@link game.Energy.verify|verify} messages.
         * @param message Energy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IEnergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Energy message, length delimited. Does not implicitly {@link game.Energy.verify|verify} messages.
         * @param message Energy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IEnergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Energy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Energy;

        /**
         * Decodes an Energy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Energy;

        /**
         * Verifies an Energy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Energy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Energy
         */
        public static fromObject(object: { [k: string]: any }): game.Energy;

        /**
         * Creates a plain object from an Energy message. Also converts values to other types if specified.
         * @param message Energy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Energy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Energy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankItem. */
    interface IRankItem {

        /** RankItem uid */
        uid?: (number|Long|null);

        /** RankItem name */
        name?: (string|null);

        /** RankItem snakeLength */
        snakeLength?: (number|null);

        /** RankItem weekSnakeLength */
        weekSnakeLength?: (number|null);
    }

    /** Represents a RankItem. */
    class RankItem implements IRankItem {

        /**
         * Constructs a new RankItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRankItem);

        /** RankItem uid. */
        public uid: (number|Long);

        /** RankItem name. */
        public name: string;

        /** RankItem snakeLength. */
        public snakeLength: number;

        /** RankItem weekSnakeLength. */
        public weekSnakeLength: number;

        /**
         * Creates a new RankItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankItem instance
         */
        public static create(properties?: game.IRankItem): game.RankItem;

        /**
         * Encodes the specified RankItem message. Does not implicitly {@link game.RankItem.verify|verify} messages.
         * @param message RankItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RankItem message, length delimited. Does not implicitly {@link game.RankItem.verify|verify} messages.
         * @param message RankItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.RankItem;

        /**
         * Decodes a RankItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.RankItem;

        /**
         * Verifies a RankItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankItem
         */
        public static fromObject(object: { [k: string]: any }): game.RankItem;

        /**
         * Creates a plain object from a RankItem message. Also converts values to other types if specified.
         * @param message RankItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.RankItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a GeneralStreamMessage. */
    interface IGeneralStreamMessage {

        /** GeneralStreamMessage command */
        command?: (string|null);

        /** GeneralStreamMessage seqId */
        seqId?: (number|Long|null);

        /** GeneralStreamMessage msgData */
        msgData?: (Uint8Array|null);
    }

    /** Represents a GeneralStreamMessage. */
    class GeneralStreamMessage implements IGeneralStreamMessage {

        /**
         * Constructs a new GeneralStreamMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IGeneralStreamMessage);

        /** GeneralStreamMessage command. */
        public command: string;

        /** GeneralStreamMessage seqId. */
        public seqId: (number|Long);

        /** GeneralStreamMessage msgData. */
        public msgData: Uint8Array;

        /**
         * Creates a new GeneralStreamMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeneralStreamMessage instance
         */
        public static create(properties?: common.IGeneralStreamMessage): common.GeneralStreamMessage;

        /**
         * Encodes the specified GeneralStreamMessage message. Does not implicitly {@link common.GeneralStreamMessage.verify|verify} messages.
         * @param message GeneralStreamMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IGeneralStreamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GeneralStreamMessage message, length delimited. Does not implicitly {@link common.GeneralStreamMessage.verify|verify} messages.
         * @param message GeneralStreamMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IGeneralStreamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeneralStreamMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeneralStreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.GeneralStreamMessage;

        /**
         * Decodes a GeneralStreamMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeneralStreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.GeneralStreamMessage;

        /**
         * Verifies a GeneralStreamMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GeneralStreamMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneralStreamMessage
         */
        public static fromObject(object: { [k: string]: any }): common.GeneralStreamMessage;

        /**
         * Creates a plain object from a GeneralStreamMessage message. Also converts values to other types if specified.
         * @param message GeneralStreamMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.GeneralStreamMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneralStreamMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ErrorPushNotify. */
    interface IErrorPushNotify {

        /** ErrorPushNotify errorCode */
        errorCode?: (common.ErrorCode|null);
    }

    /** Represents an ErrorPushNotify. */
    class ErrorPushNotify implements IErrorPushNotify {

        /**
         * Constructs a new ErrorPushNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IErrorPushNotify);

        /** ErrorPushNotify errorCode. */
        public errorCode: common.ErrorCode;

        /**
         * Creates a new ErrorPushNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorPushNotify instance
         */
        public static create(properties?: common.IErrorPushNotify): common.ErrorPushNotify;

        /**
         * Encodes the specified ErrorPushNotify message. Does not implicitly {@link common.ErrorPushNotify.verify|verify} messages.
         * @param message ErrorPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IErrorPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorPushNotify message, length delimited. Does not implicitly {@link common.ErrorPushNotify.verify|verify} messages.
         * @param message ErrorPushNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IErrorPushNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorPushNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ErrorPushNotify;

        /**
         * Decodes an ErrorPushNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ErrorPushNotify;

        /**
         * Verifies an ErrorPushNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorPushNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorPushNotify
         */
        public static fromObject(object: { [k: string]: any }): common.ErrorPushNotify;

        /**
         * Creates a plain object from an ErrorPushNotify message. Also converts values to other types if specified.
         * @param message ErrorPushNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ErrorPushNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorPushNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        INTERVAL = 0,
        RE_LOGIN = 1
    }
}
