/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.BattleEnterPushNotify = (function() {

        /**
         * Properties of a BattleEnterPushNotify.
         * @memberof game
         * @interface IBattleEnterPushNotify
         * @property {string|null} [battleId] BattleEnterPushNotify battleId
         */

        /**
         * Constructs a new BattleEnterPushNotify.
         * @memberof game
         * @classdesc Represents a BattleEnterPushNotify.
         * @implements IBattleEnterPushNotify
         * @constructor
         * @param {game.IBattleEnterPushNotify=} [properties] Properties to set
         */
        function BattleEnterPushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleEnterPushNotify battleId.
         * @member {string} battleId
         * @memberof game.BattleEnterPushNotify
         * @instance
         */
        BattleEnterPushNotify.prototype.battleId = "";

        /**
         * Creates a new BattleEnterPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {game.IBattleEnterPushNotify=} [properties] Properties to set
         * @returns {game.BattleEnterPushNotify} BattleEnterPushNotify instance
         */
        BattleEnterPushNotify.create = function create(properties) {
            return new BattleEnterPushNotify(properties);
        };

        /**
         * Encodes the specified BattleEnterPushNotify message. Does not implicitly {@link game.BattleEnterPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {game.IBattleEnterPushNotify} message BattleEnterPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && Object.hasOwnProperty.call(message, "battleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleEnterPushNotify message, length delimited. Does not implicitly {@link game.BattleEnterPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {game.IBattleEnterPushNotify} message BattleEnterPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleEnterPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleEnterPushNotify} BattleEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleEnterPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleEnterPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleEnterPushNotify} BattleEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleEnterPushNotify message.
         * @function verify
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleEnterPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isString(message.battleId))
                    return "battleId: string expected";
            return null;
        };

        /**
         * Creates a BattleEnterPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleEnterPushNotify} BattleEnterPushNotify
         */
        BattleEnterPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleEnterPushNotify)
                return object;
            var message = new $root.game.BattleEnterPushNotify();
            if (object.battleId != null)
                message.battleId = String(object.battleId);
            return message;
        };

        /**
         * Creates a plain object from a BattleEnterPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleEnterPushNotify
         * @static
         * @param {game.BattleEnterPushNotify} message BattleEnterPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleEnterPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.battleId = "";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                object.battleId = message.battleId;
            return object;
        };

        /**
         * Converts this BattleEnterPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleEnterPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleEnterPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleEnterPushNotify;
    })();

    game.BattleEnterRequest = (function() {

        /**
         * Properties of a BattleEnterRequest.
         * @memberof game
         * @interface IBattleEnterRequest
         * @property {string|null} [battleId] BattleEnterRequest battleId
         */

        /**
         * Constructs a new BattleEnterRequest.
         * @memberof game
         * @classdesc Represents a BattleEnterRequest.
         * @implements IBattleEnterRequest
         * @constructor
         * @param {game.IBattleEnterRequest=} [properties] Properties to set
         */
        function BattleEnterRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleEnterRequest battleId.
         * @member {string} battleId
         * @memberof game.BattleEnterRequest
         * @instance
         */
        BattleEnterRequest.prototype.battleId = "";

        /**
         * Creates a new BattleEnterRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleEnterRequest
         * @static
         * @param {game.IBattleEnterRequest=} [properties] Properties to set
         * @returns {game.BattleEnterRequest} BattleEnterRequest instance
         */
        BattleEnterRequest.create = function create(properties) {
            return new BattleEnterRequest(properties);
        };

        /**
         * Encodes the specified BattleEnterRequest message. Does not implicitly {@link game.BattleEnterRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleEnterRequest
         * @static
         * @param {game.IBattleEnterRequest} message BattleEnterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleId != null && Object.hasOwnProperty.call(message, "battleId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.battleId);
            return writer;
        };

        /**
         * Encodes the specified BattleEnterRequest message, length delimited. Does not implicitly {@link game.BattleEnterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleEnterRequest
         * @static
         * @param {game.IBattleEnterRequest} message BattleEnterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleEnterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleEnterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleEnterRequest} BattleEnterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleEnterRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.battleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleEnterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleEnterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleEnterRequest} BattleEnterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleEnterRequest message.
         * @function verify
         * @memberof game.BattleEnterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleEnterRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                if (!$util.isString(message.battleId))
                    return "battleId: string expected";
            return null;
        };

        /**
         * Creates a BattleEnterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleEnterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleEnterRequest} BattleEnterRequest
         */
        BattleEnterRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleEnterRequest)
                return object;
            var message = new $root.game.BattleEnterRequest();
            if (object.battleId != null)
                message.battleId = String(object.battleId);
            return message;
        };

        /**
         * Creates a plain object from a BattleEnterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleEnterRequest
         * @static
         * @param {game.BattleEnterRequest} message BattleEnterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleEnterRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.battleId = "";
            if (message.battleId != null && message.hasOwnProperty("battleId"))
                object.battleId = message.battleId;
            return object;
        };

        /**
         * Converts this BattleEnterRequest to JSON.
         * @function toJSON
         * @memberof game.BattleEnterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleEnterRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleEnterRequest;
    })();

    game.BattleEnterResponse = (function() {

        /**
         * Properties of a BattleEnterResponse.
         * @memberof game
         * @interface IBattleEnterResponse
         * @property {string|null} [errorInfo] BattleEnterResponse errorInfo
         * @property {number|null} [length] BattleEnterResponse length
         * @property {number|null} [width] BattleEnterResponse width
         * @property {game.ISelf|null} [self] BattleEnterResponse self
         * @property {Array.<game.IPlayer>|null} [players] BattleEnterResponse players
         * @property {number|null} [walkFrameTime] BattleEnterResponse walkFrameTime
         * @property {number|null} [snakePartSpace] BattleEnterResponse snakePartSpace
         */

        /**
         * Constructs a new BattleEnterResponse.
         * @memberof game
         * @classdesc Represents a BattleEnterResponse.
         * @implements IBattleEnterResponse
         * @constructor
         * @param {game.IBattleEnterResponse=} [properties] Properties to set
         */
        function BattleEnterResponse(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleEnterResponse errorInfo.
         * @member {string} errorInfo
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.errorInfo = "";

        /**
         * BattleEnterResponse length.
         * @member {number} length
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.length = 0;

        /**
         * BattleEnterResponse width.
         * @member {number} width
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.width = 0;

        /**
         * BattleEnterResponse self.
         * @member {game.ISelf|null|undefined} self
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.self = null;

        /**
         * BattleEnterResponse players.
         * @member {Array.<game.IPlayer>} players
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.players = $util.emptyArray;

        /**
         * BattleEnterResponse walkFrameTime.
         * @member {number} walkFrameTime
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.walkFrameTime = 0;

        /**
         * BattleEnterResponse snakePartSpace.
         * @member {number} snakePartSpace
         * @memberof game.BattleEnterResponse
         * @instance
         */
        BattleEnterResponse.prototype.snakePartSpace = 0;

        /**
         * Creates a new BattleEnterResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleEnterResponse
         * @static
         * @param {game.IBattleEnterResponse=} [properties] Properties to set
         * @returns {game.BattleEnterResponse} BattleEnterResponse instance
         */
        BattleEnterResponse.create = function create(properties) {
            return new BattleEnterResponse(properties);
        };

        /**
         * Encodes the specified BattleEnterResponse message. Does not implicitly {@link game.BattleEnterResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleEnterResponse
         * @static
         * @param {game.IBattleEnterResponse} message BattleEnterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorInfo != null && Object.hasOwnProperty.call(message, "errorInfo"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorInfo);
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.length);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width);
            if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                $root.game.Self.encode(message.self, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.game.Player.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.walkFrameTime != null && Object.hasOwnProperty.call(message, "walkFrameTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.walkFrameTime);
            if (message.snakePartSpace != null && Object.hasOwnProperty.call(message, "snakePartSpace"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.snakePartSpace);
            return writer;
        };

        /**
         * Encodes the specified BattleEnterResponse message, length delimited. Does not implicitly {@link game.BattleEnterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleEnterResponse
         * @static
         * @param {game.IBattleEnterResponse} message BattleEnterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleEnterResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleEnterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleEnterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleEnterResponse} BattleEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleEnterResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorInfo = reader.string();
                    break;
                case 2:
                    message.length = reader.int32();
                    break;
                case 3:
                    message.width = reader.int32();
                    break;
                case 4:
                    message.self = $root.game.Self.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.game.Player.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.walkFrameTime = reader.int32();
                    break;
                case 7:
                    message.snakePartSpace = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleEnterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleEnterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleEnterResponse} BattleEnterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleEnterResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleEnterResponse message.
         * @function verify
         * @memberof game.BattleEnterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleEnterResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorInfo != null && message.hasOwnProperty("errorInfo"))
                if (!$util.isString(message.errorInfo))
                    return "errorInfo: string expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.self != null && message.hasOwnProperty("self")) {
                var error = $root.game.Self.verify(message.self);
                if (error)
                    return "self." + error;
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.game.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.walkFrameTime != null && message.hasOwnProperty("walkFrameTime"))
                if (!$util.isInteger(message.walkFrameTime))
                    return "walkFrameTime: integer expected";
            if (message.snakePartSpace != null && message.hasOwnProperty("snakePartSpace"))
                if (!$util.isInteger(message.snakePartSpace))
                    return "snakePartSpace: integer expected";
            return null;
        };

        /**
         * Creates a BattleEnterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleEnterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleEnterResponse} BattleEnterResponse
         */
        BattleEnterResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleEnterResponse)
                return object;
            var message = new $root.game.BattleEnterResponse();
            if (object.errorInfo != null)
                message.errorInfo = String(object.errorInfo);
            if (object.length != null)
                message.length = object.length | 0;
            if (object.width != null)
                message.width = object.width | 0;
            if (object.self != null) {
                if (typeof object.self !== "object")
                    throw TypeError(".game.BattleEnterResponse.self: object expected");
                message.self = $root.game.Self.fromObject(object.self);
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".game.BattleEnterResponse.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".game.BattleEnterResponse.players: object expected");
                    message.players[i] = $root.game.Player.fromObject(object.players[i]);
                }
            }
            if (object.walkFrameTime != null)
                message.walkFrameTime = object.walkFrameTime | 0;
            if (object.snakePartSpace != null)
                message.snakePartSpace = object.snakePartSpace | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleEnterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleEnterResponse
         * @static
         * @param {game.BattleEnterResponse} message BattleEnterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleEnterResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.errorInfo = "";
                object.length = 0;
                object.width = 0;
                object.self = null;
                object.walkFrameTime = 0;
                object.snakePartSpace = 0;
            }
            if (message.errorInfo != null && message.hasOwnProperty("errorInfo"))
                object.errorInfo = message.errorInfo;
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.self != null && message.hasOwnProperty("self"))
                object.self = $root.game.Self.toObject(message.self, options);
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.game.Player.toObject(message.players[j], options);
            }
            if (message.walkFrameTime != null && message.hasOwnProperty("walkFrameTime"))
                object.walkFrameTime = message.walkFrameTime;
            if (message.snakePartSpace != null && message.hasOwnProperty("snakePartSpace"))
                object.snakePartSpace = message.snakePartSpace;
            return object;
        };

        /**
         * Converts this BattleEnterResponse to JSON.
         * @function toJSON
         * @memberof game.BattleEnterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleEnterResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleEnterResponse;
    })();

    game.BattleReadyRequest = (function() {

        /**
         * Properties of a BattleReadyRequest.
         * @memberof game
         * @interface IBattleReadyRequest
         */

        /**
         * Constructs a new BattleReadyRequest.
         * @memberof game
         * @classdesc Represents a BattleReadyRequest.
         * @implements IBattleReadyRequest
         * @constructor
         * @param {game.IBattleReadyRequest=} [properties] Properties to set
         */
        function BattleReadyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleReadyRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleReadyRequest
         * @static
         * @param {game.IBattleReadyRequest=} [properties] Properties to set
         * @returns {game.BattleReadyRequest} BattleReadyRequest instance
         */
        BattleReadyRequest.create = function create(properties) {
            return new BattleReadyRequest(properties);
        };

        /**
         * Encodes the specified BattleReadyRequest message. Does not implicitly {@link game.BattleReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleReadyRequest
         * @static
         * @param {game.IBattleReadyRequest} message BattleReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleReadyRequest message, length delimited. Does not implicitly {@link game.BattleReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleReadyRequest
         * @static
         * @param {game.IBattleReadyRequest} message BattleReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleReadyRequest} BattleReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleReadyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleReadyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleReadyRequest} BattleReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReadyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleReadyRequest message.
         * @function verify
         * @memberof game.BattleReadyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleReadyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleReadyRequest} BattleReadyRequest
         */
        BattleReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleReadyRequest)
                return object;
            return new $root.game.BattleReadyRequest();
        };

        /**
         * Creates a plain object from a BattleReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleReadyRequest
         * @static
         * @param {game.BattleReadyRequest} message BattleReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleReadyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleReadyRequest to JSON.
         * @function toJSON
         * @memberof game.BattleReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleReadyRequest;
    })();

    game.BattleReadyResponse = (function() {

        /**
         * Properties of a BattleReadyResponse.
         * @memberof game
         * @interface IBattleReadyResponse
         */

        /**
         * Constructs a new BattleReadyResponse.
         * @memberof game
         * @classdesc Represents a BattleReadyResponse.
         * @implements IBattleReadyResponse
         * @constructor
         * @param {game.IBattleReadyResponse=} [properties] Properties to set
         */
        function BattleReadyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleReadyResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleReadyResponse
         * @static
         * @param {game.IBattleReadyResponse=} [properties] Properties to set
         * @returns {game.BattleReadyResponse} BattleReadyResponse instance
         */
        BattleReadyResponse.create = function create(properties) {
            return new BattleReadyResponse(properties);
        };

        /**
         * Encodes the specified BattleReadyResponse message. Does not implicitly {@link game.BattleReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleReadyResponse
         * @static
         * @param {game.IBattleReadyResponse} message BattleReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleReadyResponse message, length delimited. Does not implicitly {@link game.BattleReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleReadyResponse
         * @static
         * @param {game.IBattleReadyResponse} message BattleReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleReadyResponse} BattleReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleReadyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleReadyResponse} BattleReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleReadyResponse message.
         * @function verify
         * @memberof game.BattleReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleReadyResponse} BattleReadyResponse
         */
        BattleReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleReadyResponse)
                return object;
            return new $root.game.BattleReadyResponse();
        };

        /**
         * Creates a plain object from a BattleReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleReadyResponse
         * @static
         * @param {game.BattleReadyResponse} message BattleReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleReadyResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleReadyResponse to JSON.
         * @function toJSON
         * @memberof game.BattleReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleReadyResponse;
    })();

    game.BattleBeginPushNotify = (function() {

        /**
         * Properties of a BattleBeginPushNotify.
         * @memberof game
         * @interface IBattleBeginPushNotify
         * @property {Array.<game.IPlayer>|null} [players] BattleBeginPushNotify players
         * @property {Array.<game.IEnergy>|null} [energies] BattleBeginPushNotify energies
         */

        /**
         * Constructs a new BattleBeginPushNotify.
         * @memberof game
         * @classdesc Represents a BattleBeginPushNotify.
         * @implements IBattleBeginPushNotify
         * @constructor
         * @param {game.IBattleBeginPushNotify=} [properties] Properties to set
         */
        function BattleBeginPushNotify(properties) {
            this.players = [];
            this.energies = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleBeginPushNotify players.
         * @member {Array.<game.IPlayer>} players
         * @memberof game.BattleBeginPushNotify
         * @instance
         */
        BattleBeginPushNotify.prototype.players = $util.emptyArray;

        /**
         * BattleBeginPushNotify energies.
         * @member {Array.<game.IEnergy>} energies
         * @memberof game.BattleBeginPushNotify
         * @instance
         */
        BattleBeginPushNotify.prototype.energies = $util.emptyArray;

        /**
         * Creates a new BattleBeginPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {game.IBattleBeginPushNotify=} [properties] Properties to set
         * @returns {game.BattleBeginPushNotify} BattleBeginPushNotify instance
         */
        BattleBeginPushNotify.create = function create(properties) {
            return new BattleBeginPushNotify(properties);
        };

        /**
         * Encodes the specified BattleBeginPushNotify message. Does not implicitly {@link game.BattleBeginPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {game.IBattleBeginPushNotify} message BattleBeginPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleBeginPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.game.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.energies != null && message.energies.length)
                for (var i = 0; i < message.energies.length; ++i)
                    $root.game.Energy.encode(message.energies[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleBeginPushNotify message, length delimited. Does not implicitly {@link game.BattleBeginPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {game.IBattleBeginPushNotify} message BattleBeginPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleBeginPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleBeginPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleBeginPushNotify} BattleBeginPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleBeginPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleBeginPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.game.Player.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.energies && message.energies.length))
                        message.energies = [];
                    message.energies.push($root.game.Energy.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleBeginPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleBeginPushNotify} BattleBeginPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleBeginPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleBeginPushNotify message.
         * @function verify
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleBeginPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.game.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.energies != null && message.hasOwnProperty("energies")) {
                if (!Array.isArray(message.energies))
                    return "energies: array expected";
                for (var i = 0; i < message.energies.length; ++i) {
                    var error = $root.game.Energy.verify(message.energies[i]);
                    if (error)
                        return "energies." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleBeginPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleBeginPushNotify} BattleBeginPushNotify
         */
        BattleBeginPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleBeginPushNotify)
                return object;
            var message = new $root.game.BattleBeginPushNotify();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".game.BattleBeginPushNotify.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".game.BattleBeginPushNotify.players: object expected");
                    message.players[i] = $root.game.Player.fromObject(object.players[i]);
                }
            }
            if (object.energies) {
                if (!Array.isArray(object.energies))
                    throw TypeError(".game.BattleBeginPushNotify.energies: array expected");
                message.energies = [];
                for (var i = 0; i < object.energies.length; ++i) {
                    if (typeof object.energies[i] !== "object")
                        throw TypeError(".game.BattleBeginPushNotify.energies: object expected");
                    message.energies[i] = $root.game.Energy.fromObject(object.energies[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleBeginPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleBeginPushNotify
         * @static
         * @param {game.BattleBeginPushNotify} message BattleBeginPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleBeginPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.players = [];
                object.energies = [];
            }
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.game.Player.toObject(message.players[j], options);
            }
            if (message.energies && message.energies.length) {
                object.energies = [];
                for (var j = 0; j < message.energies.length; ++j)
                    object.energies[j] = $root.game.Energy.toObject(message.energies[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleBeginPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleBeginPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleBeginPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleBeginPushNotify;
    })();

    game.BattleWalkRequest = (function() {

        /**
         * Properties of a BattleWalkRequest.
         * @memberof game
         * @interface IBattleWalkRequest
         * @property {number|null} [rx] BattleWalkRequest rx
         * @property {number|null} [ry] BattleWalkRequest ry
         * @property {Array.<game.IPoint>|null} [points] BattleWalkRequest points
         */

        /**
         * Constructs a new BattleWalkRequest.
         * @memberof game
         * @classdesc Represents a BattleWalkRequest.
         * @implements IBattleWalkRequest
         * @constructor
         * @param {game.IBattleWalkRequest=} [properties] Properties to set
         */
        function BattleWalkRequest(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleWalkRequest rx.
         * @member {number} rx
         * @memberof game.BattleWalkRequest
         * @instance
         */
        BattleWalkRequest.prototype.rx = 0;

        /**
         * BattleWalkRequest ry.
         * @member {number} ry
         * @memberof game.BattleWalkRequest
         * @instance
         */
        BattleWalkRequest.prototype.ry = 0;

        /**
         * BattleWalkRequest points.
         * @member {Array.<game.IPoint>} points
         * @memberof game.BattleWalkRequest
         * @instance
         */
        BattleWalkRequest.prototype.points = $util.emptyArray;

        /**
         * Creates a new BattleWalkRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleWalkRequest
         * @static
         * @param {game.IBattleWalkRequest=} [properties] Properties to set
         * @returns {game.BattleWalkRequest} BattleWalkRequest instance
         */
        BattleWalkRequest.create = function create(properties) {
            return new BattleWalkRequest(properties);
        };

        /**
         * Encodes the specified BattleWalkRequest message. Does not implicitly {@link game.BattleWalkRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleWalkRequest
         * @static
         * @param {game.IBattleWalkRequest} message BattleWalkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleWalkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rx != null && Object.hasOwnProperty.call(message, "rx"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.rx);
            if (message.ry != null && Object.hasOwnProperty.call(message, "ry"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.ry);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    $root.game.Point.encode(message.points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleWalkRequest message, length delimited. Does not implicitly {@link game.BattleWalkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleWalkRequest
         * @static
         * @param {game.IBattleWalkRequest} message BattleWalkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleWalkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleWalkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleWalkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleWalkRequest} BattleWalkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleWalkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleWalkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rx = reader.float();
                    break;
                case 2:
                    message.ry = reader.float();
                    break;
                case 3:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.game.Point.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleWalkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleWalkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleWalkRequest} BattleWalkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleWalkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleWalkRequest message.
         * @function verify
         * @memberof game.BattleWalkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleWalkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rx != null && message.hasOwnProperty("rx"))
                if (typeof message.rx !== "number")
                    return "rx: number expected";
            if (message.ry != null && message.hasOwnProperty("ry"))
                if (typeof message.ry !== "number")
                    return "ry: number expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i) {
                    var error = $root.game.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleWalkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleWalkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleWalkRequest} BattleWalkRequest
         */
        BattleWalkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleWalkRequest)
                return object;
            var message = new $root.game.BattleWalkRequest();
            if (object.rx != null)
                message.rx = Number(object.rx);
            if (object.ry != null)
                message.ry = Number(object.ry);
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".game.BattleWalkRequest.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".game.BattleWalkRequest.points: object expected");
                    message.points[i] = $root.game.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleWalkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleWalkRequest
         * @static
         * @param {game.BattleWalkRequest} message BattleWalkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleWalkRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults) {
                object.rx = 0;
                object.ry = 0;
            }
            if (message.rx != null && message.hasOwnProperty("rx"))
                object.rx = options.json && !isFinite(message.rx) ? String(message.rx) : message.rx;
            if (message.ry != null && message.hasOwnProperty("ry"))
                object.ry = options.json && !isFinite(message.ry) ? String(message.ry) : message.ry;
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.game.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleWalkRequest to JSON.
         * @function toJSON
         * @memberof game.BattleWalkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleWalkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleWalkRequest;
    })();

    game.BattleWalkPushNotify = (function() {

        /**
         * Properties of a BattleWalkPushNotify.
         * @memberof game
         * @interface IBattleWalkPushNotify
         * @property {number|Long|null} [uid] BattleWalkPushNotify uid
         * @property {Array.<game.IPoint>|null} [points] BattleWalkPushNotify points
         */

        /**
         * Constructs a new BattleWalkPushNotify.
         * @memberof game
         * @classdesc Represents a BattleWalkPushNotify.
         * @implements IBattleWalkPushNotify
         * @constructor
         * @param {game.IBattleWalkPushNotify=} [properties] Properties to set
         */
        function BattleWalkPushNotify(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleWalkPushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleWalkPushNotify
         * @instance
         */
        BattleWalkPushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleWalkPushNotify points.
         * @member {Array.<game.IPoint>} points
         * @memberof game.BattleWalkPushNotify
         * @instance
         */
        BattleWalkPushNotify.prototype.points = $util.emptyArray;

        /**
         * Creates a new BattleWalkPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {game.IBattleWalkPushNotify=} [properties] Properties to set
         * @returns {game.BattleWalkPushNotify} BattleWalkPushNotify instance
         */
        BattleWalkPushNotify.create = function create(properties) {
            return new BattleWalkPushNotify(properties);
        };

        /**
         * Encodes the specified BattleWalkPushNotify message. Does not implicitly {@link game.BattleWalkPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {game.IBattleWalkPushNotify} message BattleWalkPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleWalkPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.uid);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    $root.game.Point.encode(message.points[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleWalkPushNotify message, length delimited. Does not implicitly {@link game.BattleWalkPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {game.IBattleWalkPushNotify} message BattleWalkPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleWalkPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleWalkPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleWalkPushNotify} BattleWalkPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleWalkPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleWalkPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.sint64();
                    break;
                case 2:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.game.Point.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleWalkPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleWalkPushNotify} BattleWalkPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleWalkPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleWalkPushNotify message.
         * @function verify
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleWalkPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i) {
                    var error = $root.game.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleWalkPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleWalkPushNotify} BattleWalkPushNotify
         */
        BattleWalkPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleWalkPushNotify)
                return object;
            var message = new $root.game.BattleWalkPushNotify();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".game.BattleWalkPushNotify.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".game.BattleWalkPushNotify.points: object expected");
                    message.points[i] = $root.game.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleWalkPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleWalkPushNotify
         * @static
         * @param {game.BattleWalkPushNotify} message BattleWalkPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleWalkPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.game.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleWalkPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleWalkPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleWalkPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleWalkPushNotify;
    })();

    game.BattleSnakeChangePushNotify = (function() {

        /**
         * Properties of a BattleSnakeChangePushNotify.
         * @memberof game
         * @interface IBattleSnakeChangePushNotify
         * @property {number|Long|null} [uid] BattleSnakeChangePushNotify uid
         * @property {Array.<game.IAttr>|null} [attrs] BattleSnakeChangePushNotify attrs
         */

        /**
         * Constructs a new BattleSnakeChangePushNotify.
         * @memberof game
         * @classdesc Represents a BattleSnakeChangePushNotify.
         * @implements IBattleSnakeChangePushNotify
         * @constructor
         * @param {game.IBattleSnakeChangePushNotify=} [properties] Properties to set
         */
        function BattleSnakeChangePushNotify(properties) {
            this.attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSnakeChangePushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleSnakeChangePushNotify
         * @instance
         */
        BattleSnakeChangePushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleSnakeChangePushNotify attrs.
         * @member {Array.<game.IAttr>} attrs
         * @memberof game.BattleSnakeChangePushNotify
         * @instance
         */
        BattleSnakeChangePushNotify.prototype.attrs = $util.emptyArray;

        /**
         * Creates a new BattleSnakeChangePushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {game.IBattleSnakeChangePushNotify=} [properties] Properties to set
         * @returns {game.BattleSnakeChangePushNotify} BattleSnakeChangePushNotify instance
         */
        BattleSnakeChangePushNotify.create = function create(properties) {
            return new BattleSnakeChangePushNotify(properties);
        };

        /**
         * Encodes the specified BattleSnakeChangePushNotify message. Does not implicitly {@link game.BattleSnakeChangePushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {game.IBattleSnakeChangePushNotify} message BattleSnakeChangePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeChangePushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.uid);
            if (message.attrs != null && message.attrs.length)
                for (var i = 0; i < message.attrs.length; ++i)
                    $root.game.Attr.encode(message.attrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleSnakeChangePushNotify message, length delimited. Does not implicitly {@link game.BattleSnakeChangePushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {game.IBattleSnakeChangePushNotify} message BattleSnakeChangePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeChangePushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSnakeChangePushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleSnakeChangePushNotify} BattleSnakeChangePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeChangePushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleSnakeChangePushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.sint64();
                    break;
                case 2:
                    if (!(message.attrs && message.attrs.length))
                        message.attrs = [];
                    message.attrs.push($root.game.Attr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSnakeChangePushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleSnakeChangePushNotify} BattleSnakeChangePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeChangePushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSnakeChangePushNotify message.
         * @function verify
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSnakeChangePushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.attrs != null && message.hasOwnProperty("attrs")) {
                if (!Array.isArray(message.attrs))
                    return "attrs: array expected";
                for (var i = 0; i < message.attrs.length; ++i) {
                    var error = $root.game.Attr.verify(message.attrs[i]);
                    if (error)
                        return "attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleSnakeChangePushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleSnakeChangePushNotify} BattleSnakeChangePushNotify
         */
        BattleSnakeChangePushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleSnakeChangePushNotify)
                return object;
            var message = new $root.game.BattleSnakeChangePushNotify();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.attrs) {
                if (!Array.isArray(object.attrs))
                    throw TypeError(".game.BattleSnakeChangePushNotify.attrs: array expected");
                message.attrs = [];
                for (var i = 0; i < object.attrs.length; ++i) {
                    if (typeof object.attrs[i] !== "object")
                        throw TypeError(".game.BattleSnakeChangePushNotify.attrs: object expected");
                    message.attrs[i] = $root.game.Attr.fromObject(object.attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleSnakeChangePushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleSnakeChangePushNotify
         * @static
         * @param {game.BattleSnakeChangePushNotify} message BattleSnakeChangePushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSnakeChangePushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.attrs = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.attrs && message.attrs.length) {
                object.attrs = [];
                for (var j = 0; j < message.attrs.length; ++j)
                    object.attrs[j] = $root.game.Attr.toObject(message.attrs[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleSnakeChangePushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleSnakeChangePushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSnakeChangePushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleSnakeChangePushNotify;
    })();

    game.Attr = (function() {

        /**
         * Properties of an Attr.
         * @memberof game
         * @interface IAttr
         * @property {game.AttrType|null} [attrType] Attr attrType
         * @property {number|null} [value] Attr value
         */

        /**
         * Constructs a new Attr.
         * @memberof game
         * @classdesc Represents an Attr.
         * @implements IAttr
         * @constructor
         * @param {game.IAttr=} [properties] Properties to set
         */
        function Attr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attr attrType.
         * @member {game.AttrType} attrType
         * @memberof game.Attr
         * @instance
         */
        Attr.prototype.attrType = 0;

        /**
         * Attr value.
         * @member {number} value
         * @memberof game.Attr
         * @instance
         */
        Attr.prototype.value = 0;

        /**
         * Creates a new Attr instance using the specified properties.
         * @function create
         * @memberof game.Attr
         * @static
         * @param {game.IAttr=} [properties] Properties to set
         * @returns {game.Attr} Attr instance
         */
        Attr.create = function create(properties) {
            return new Attr(properties);
        };

        /**
         * Encodes the specified Attr message. Does not implicitly {@link game.Attr.verify|verify} messages.
         * @function encode
         * @memberof game.Attr
         * @static
         * @param {game.IAttr} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attrType != null && Object.hasOwnProperty.call(message, "attrType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.attrType);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified Attr message, length delimited. Does not implicitly {@link game.Attr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Attr
         * @static
         * @param {game.IAttr} message Attr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attr message from the specified reader or buffer.
         * @function decode
         * @memberof game.Attr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Attr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.attrType = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Attr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Attr} Attr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attr message.
         * @function verify
         * @memberof game.Attr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Attr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attrType != null && message.hasOwnProperty("attrType"))
                switch (message.attrType) {
                default:
                    return "attrType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates an Attr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Attr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Attr} Attr
         */
        Attr.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Attr)
                return object;
            var message = new $root.game.Attr();
            switch (object.attrType) {
            case "TYPE_INVALID":
            case 0:
                message.attrType = 0;
                break;
            case "LENGTH":
            case 1:
                message.attrType = 1;
                break;
            case "SPEED":
            case 2:
                message.attrType = 2;
                break;
            case "KILL_COUNT":
            case 3:
                message.attrType = 3;
                break;
            }
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from an Attr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Attr
         * @static
         * @param {game.Attr} message Attr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.attrType = options.enums === String ? "TYPE_INVALID" : 0;
                object.value = 0;
            }
            if (message.attrType != null && message.hasOwnProperty("attrType"))
                object.attrType = options.enums === String ? $root.game.AttrType[message.attrType] : message.attrType;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Attr to JSON.
         * @function toJSON
         * @memberof game.Attr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Attr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attr;
    })();

    /**
     * AttrType enum.
     * @name game.AttrType
     * @enum {number}
     * @property {number} TYPE_INVALID=0 TYPE_INVALID value
     * @property {number} LENGTH=1 LENGTH value
     * @property {number} SPEED=2 SPEED value
     * @property {number} KILL_COUNT=3 KILL_COUNT value
     */
    game.AttrType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TYPE_INVALID"] = 0;
        values[valuesById[1] = "LENGTH"] = 1;
        values[valuesById[2] = "SPEED"] = 2;
        values[valuesById[3] = "KILL_COUNT"] = 3;
        return values;
    })();

    game.BattleOtherEnterPushNotify = (function() {

        /**
         * Properties of a BattleOtherEnterPushNotify.
         * @memberof game
         * @interface IBattleOtherEnterPushNotify
         * @property {game.IPlayer|null} [players] BattleOtherEnterPushNotify players
         */

        /**
         * Constructs a new BattleOtherEnterPushNotify.
         * @memberof game
         * @classdesc Represents a BattleOtherEnterPushNotify.
         * @implements IBattleOtherEnterPushNotify
         * @constructor
         * @param {game.IBattleOtherEnterPushNotify=} [properties] Properties to set
         */
        function BattleOtherEnterPushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleOtherEnterPushNotify players.
         * @member {game.IPlayer|null|undefined} players
         * @memberof game.BattleOtherEnterPushNotify
         * @instance
         */
        BattleOtherEnterPushNotify.prototype.players = null;

        /**
         * Creates a new BattleOtherEnterPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {game.IBattleOtherEnterPushNotify=} [properties] Properties to set
         * @returns {game.BattleOtherEnterPushNotify} BattleOtherEnterPushNotify instance
         */
        BattleOtherEnterPushNotify.create = function create(properties) {
            return new BattleOtherEnterPushNotify(properties);
        };

        /**
         * Encodes the specified BattleOtherEnterPushNotify message. Does not implicitly {@link game.BattleOtherEnterPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {game.IBattleOtherEnterPushNotify} message BattleOtherEnterPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOtherEnterPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && Object.hasOwnProperty.call(message, "players"))
                $root.game.Player.encode(message.players, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleOtherEnterPushNotify message, length delimited. Does not implicitly {@link game.BattleOtherEnterPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {game.IBattleOtherEnterPushNotify} message BattleOtherEnterPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOtherEnterPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleOtherEnterPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleOtherEnterPushNotify} BattleOtherEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOtherEnterPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleOtherEnterPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.players = $root.game.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleOtherEnterPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleOtherEnterPushNotify} BattleOtherEnterPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOtherEnterPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleOtherEnterPushNotify message.
         * @function verify
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleOtherEnterPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                var error = $root.game.Player.verify(message.players);
                if (error)
                    return "players." + error;
            }
            return null;
        };

        /**
         * Creates a BattleOtherEnterPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleOtherEnterPushNotify} BattleOtherEnterPushNotify
         */
        BattleOtherEnterPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleOtherEnterPushNotify)
                return object;
            var message = new $root.game.BattleOtherEnterPushNotify();
            if (object.players != null) {
                if (typeof object.players !== "object")
                    throw TypeError(".game.BattleOtherEnterPushNotify.players: object expected");
                message.players = $root.game.Player.fromObject(object.players);
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleOtherEnterPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleOtherEnterPushNotify
         * @static
         * @param {game.BattleOtherEnterPushNotify} message BattleOtherEnterPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleOtherEnterPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.players = null;
            if (message.players != null && message.hasOwnProperty("players"))
                object.players = $root.game.Player.toObject(message.players, options);
            return object;
        };

        /**
         * Converts this BattleOtherEnterPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleOtherEnterPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleOtherEnterPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleOtherEnterPushNotify;
    })();

    game.BattleLeaveRequest = (function() {

        /**
         * Properties of a BattleLeaveRequest.
         * @memberof game
         * @interface IBattleLeaveRequest
         */

        /**
         * Constructs a new BattleLeaveRequest.
         * @memberof game
         * @classdesc Represents a BattleLeaveRequest.
         * @implements IBattleLeaveRequest
         * @constructor
         * @param {game.IBattleLeaveRequest=} [properties] Properties to set
         */
        function BattleLeaveRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleLeaveRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {game.IBattleLeaveRequest=} [properties] Properties to set
         * @returns {game.BattleLeaveRequest} BattleLeaveRequest instance
         */
        BattleLeaveRequest.create = function create(properties) {
            return new BattleLeaveRequest(properties);
        };

        /**
         * Encodes the specified BattleLeaveRequest message. Does not implicitly {@link game.BattleLeaveRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {game.IBattleLeaveRequest} message BattleLeaveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeaveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleLeaveRequest message, length delimited. Does not implicitly {@link game.BattleLeaveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {game.IBattleLeaveRequest} message BattleLeaveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeaveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLeaveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleLeaveRequest} BattleLeaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeaveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleLeaveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLeaveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleLeaveRequest} BattleLeaveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeaveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLeaveRequest message.
         * @function verify
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLeaveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleLeaveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleLeaveRequest} BattleLeaveRequest
         */
        BattleLeaveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleLeaveRequest)
                return object;
            return new $root.game.BattleLeaveRequest();
        };

        /**
         * Creates a plain object from a BattleLeaveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleLeaveRequest
         * @static
         * @param {game.BattleLeaveRequest} message BattleLeaveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLeaveRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleLeaveRequest to JSON.
         * @function toJSON
         * @memberof game.BattleLeaveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLeaveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLeaveRequest;
    })();

    game.BattleLeaveResponse = (function() {

        /**
         * Properties of a BattleLeaveResponse.
         * @memberof game
         * @interface IBattleLeaveResponse
         */

        /**
         * Constructs a new BattleLeaveResponse.
         * @memberof game
         * @classdesc Represents a BattleLeaveResponse.
         * @implements IBattleLeaveResponse
         * @constructor
         * @param {game.IBattleLeaveResponse=} [properties] Properties to set
         */
        function BattleLeaveResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleLeaveResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {game.IBattleLeaveResponse=} [properties] Properties to set
         * @returns {game.BattleLeaveResponse} BattleLeaveResponse instance
         */
        BattleLeaveResponse.create = function create(properties) {
            return new BattleLeaveResponse(properties);
        };

        /**
         * Encodes the specified BattleLeaveResponse message. Does not implicitly {@link game.BattleLeaveResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {game.IBattleLeaveResponse} message BattleLeaveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeaveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleLeaveResponse message, length delimited. Does not implicitly {@link game.BattleLeaveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {game.IBattleLeaveResponse} message BattleLeaveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeaveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLeaveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleLeaveResponse} BattleLeaveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeaveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleLeaveResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLeaveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleLeaveResponse} BattleLeaveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeaveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLeaveResponse message.
         * @function verify
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLeaveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleLeaveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleLeaveResponse} BattleLeaveResponse
         */
        BattleLeaveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleLeaveResponse)
                return object;
            return new $root.game.BattleLeaveResponse();
        };

        /**
         * Creates a plain object from a BattleLeaveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleLeaveResponse
         * @static
         * @param {game.BattleLeaveResponse} message BattleLeaveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLeaveResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleLeaveResponse to JSON.
         * @function toJSON
         * @memberof game.BattleLeaveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLeaveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLeaveResponse;
    })();

    game.BattleLeavePushNotify = (function() {

        /**
         * Properties of a BattleLeavePushNotify.
         * @memberof game
         * @interface IBattleLeavePushNotify
         * @property {number|Long|null} [uid] BattleLeavePushNotify uid
         */

        /**
         * Constructs a new BattleLeavePushNotify.
         * @memberof game
         * @classdesc Represents a BattleLeavePushNotify.
         * @implements IBattleLeavePushNotify
         * @constructor
         * @param {game.IBattleLeavePushNotify=} [properties] Properties to set
         */
        function BattleLeavePushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleLeavePushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleLeavePushNotify
         * @instance
         */
        BattleLeavePushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleLeavePushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {game.IBattleLeavePushNotify=} [properties] Properties to set
         * @returns {game.BattleLeavePushNotify} BattleLeavePushNotify instance
         */
        BattleLeavePushNotify.create = function create(properties) {
            return new BattleLeavePushNotify(properties);
        };

        /**
         * Encodes the specified BattleLeavePushNotify message. Does not implicitly {@link game.BattleLeavePushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {game.IBattleLeavePushNotify} message BattleLeavePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeavePushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified BattleLeavePushNotify message, length delimited. Does not implicitly {@link game.BattleLeavePushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {game.IBattleLeavePushNotify} message BattleLeavePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLeavePushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLeavePushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleLeavePushNotify} BattleLeavePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeavePushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleLeavePushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLeavePushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleLeavePushNotify} BattleLeavePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLeavePushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLeavePushNotify message.
         * @function verify
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLeavePushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleLeavePushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleLeavePushNotify} BattleLeavePushNotify
         */
        BattleLeavePushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleLeavePushNotify)
                return object;
            var message = new $root.game.BattleLeavePushNotify();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleLeavePushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleLeavePushNotify
         * @static
         * @param {game.BattleLeavePushNotify} message BattleLeavePushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLeavePushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this BattleLeavePushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleLeavePushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLeavePushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLeavePushNotify;
    })();

    game.BattleDeathPushNotify = (function() {

        /**
         * Properties of a BattleDeathPushNotify.
         * @memberof game
         * @interface IBattleDeathPushNotify
         * @property {number|Long|null} [uid] BattleDeathPushNotify uid
         * @property {Array.<game.IEnergy>|null} [energies] BattleDeathPushNotify energies
         * @property {game.BattleDeathPushNotify.Type|null} [deathType] BattleDeathPushNotify deathType
         * @property {string|null} [killerName] BattleDeathPushNotify killerName
         * @property {number|null} [reviveCount] BattleDeathPushNotify reviveCount
         * @property {number|null} [snakeLength] BattleDeathPushNotify snakeLength
         */

        /**
         * Constructs a new BattleDeathPushNotify.
         * @memberof game
         * @classdesc Represents a BattleDeathPushNotify.
         * @implements IBattleDeathPushNotify
         * @constructor
         * @param {game.IBattleDeathPushNotify=} [properties] Properties to set
         */
        function BattleDeathPushNotify(properties) {
            this.energies = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleDeathPushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleDeathPushNotify energies.
         * @member {Array.<game.IEnergy>} energies
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.energies = $util.emptyArray;

        /**
         * BattleDeathPushNotify deathType.
         * @member {game.BattleDeathPushNotify.Type} deathType
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.deathType = 0;

        /**
         * BattleDeathPushNotify killerName.
         * @member {string} killerName
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.killerName = "";

        /**
         * BattleDeathPushNotify reviveCount.
         * @member {number} reviveCount
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.reviveCount = 0;

        /**
         * BattleDeathPushNotify snakeLength.
         * @member {number} snakeLength
         * @memberof game.BattleDeathPushNotify
         * @instance
         */
        BattleDeathPushNotify.prototype.snakeLength = 0;

        /**
         * Creates a new BattleDeathPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {game.IBattleDeathPushNotify=} [properties] Properties to set
         * @returns {game.BattleDeathPushNotify} BattleDeathPushNotify instance
         */
        BattleDeathPushNotify.create = function create(properties) {
            return new BattleDeathPushNotify(properties);
        };

        /**
         * Encodes the specified BattleDeathPushNotify message. Does not implicitly {@link game.BattleDeathPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {game.IBattleDeathPushNotify} message BattleDeathPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleDeathPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.uid);
            if (message.energies != null && message.energies.length)
                for (var i = 0; i < message.energies.length; ++i)
                    $root.game.Energy.encode(message.energies[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.deathType != null && Object.hasOwnProperty.call(message, "deathType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deathType);
            if (message.killerName != null && Object.hasOwnProperty.call(message, "killerName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.killerName);
            if (message.reviveCount != null && Object.hasOwnProperty.call(message, "reviveCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.reviveCount);
            if (message.snakeLength != null && Object.hasOwnProperty.call(message, "snakeLength"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.snakeLength);
            return writer;
        };

        /**
         * Encodes the specified BattleDeathPushNotify message, length delimited. Does not implicitly {@link game.BattleDeathPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {game.IBattleDeathPushNotify} message BattleDeathPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleDeathPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleDeathPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleDeathPushNotify} BattleDeathPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleDeathPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleDeathPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.sint64();
                    break;
                case 2:
                    if (!(message.energies && message.energies.length))
                        message.energies = [];
                    message.energies.push($root.game.Energy.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.deathType = reader.int32();
                    break;
                case 4:
                    message.killerName = reader.string();
                    break;
                case 5:
                    message.reviveCount = reader.int32();
                    break;
                case 6:
                    message.snakeLength = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleDeathPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleDeathPushNotify} BattleDeathPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleDeathPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleDeathPushNotify message.
         * @function verify
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleDeathPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.energies != null && message.hasOwnProperty("energies")) {
                if (!Array.isArray(message.energies))
                    return "energies: array expected";
                for (var i = 0; i < message.energies.length; ++i) {
                    var error = $root.game.Energy.verify(message.energies[i]);
                    if (error)
                        return "energies." + error;
                }
            }
            if (message.deathType != null && message.hasOwnProperty("deathType"))
                switch (message.deathType) {
                default:
                    return "deathType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.killerName != null && message.hasOwnProperty("killerName"))
                if (!$util.isString(message.killerName))
                    return "killerName: string expected";
            if (message.reviveCount != null && message.hasOwnProperty("reviveCount"))
                if (!$util.isInteger(message.reviveCount))
                    return "reviveCount: integer expected";
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                if (!$util.isInteger(message.snakeLength))
                    return "snakeLength: integer expected";
            return null;
        };

        /**
         * Creates a BattleDeathPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleDeathPushNotify} BattleDeathPushNotify
         */
        BattleDeathPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleDeathPushNotify)
                return object;
            var message = new $root.game.BattleDeathPushNotify();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.energies) {
                if (!Array.isArray(object.energies))
                    throw TypeError(".game.BattleDeathPushNotify.energies: array expected");
                message.energies = [];
                for (var i = 0; i < object.energies.length; ++i) {
                    if (typeof object.energies[i] !== "object")
                        throw TypeError(".game.BattleDeathPushNotify.energies: object expected");
                    message.energies[i] = $root.game.Energy.fromObject(object.energies[i]);
                }
            }
            switch (object.deathType) {
            case "DEATH_ERROR":
            case 0:
                message.deathType = 0;
                break;
            case "COLLISION":
            case 1:
                message.deathType = 1;
                break;
            case "KILLED":
            case 2:
                message.deathType = 2;
                break;
            }
            if (object.killerName != null)
                message.killerName = String(object.killerName);
            if (object.reviveCount != null)
                message.reviveCount = object.reviveCount | 0;
            if (object.snakeLength != null)
                message.snakeLength = object.snakeLength | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleDeathPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleDeathPushNotify
         * @static
         * @param {game.BattleDeathPushNotify} message BattleDeathPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleDeathPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.energies = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.deathType = options.enums === String ? "DEATH_ERROR" : 0;
                object.killerName = "";
                object.reviveCount = 0;
                object.snakeLength = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.energies && message.energies.length) {
                object.energies = [];
                for (var j = 0; j < message.energies.length; ++j)
                    object.energies[j] = $root.game.Energy.toObject(message.energies[j], options);
            }
            if (message.deathType != null && message.hasOwnProperty("deathType"))
                object.deathType = options.enums === String ? $root.game.BattleDeathPushNotify.Type[message.deathType] : message.deathType;
            if (message.killerName != null && message.hasOwnProperty("killerName"))
                object.killerName = message.killerName;
            if (message.reviveCount != null && message.hasOwnProperty("reviveCount"))
                object.reviveCount = message.reviveCount;
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                object.snakeLength = message.snakeLength;
            return object;
        };

        /**
         * Converts this BattleDeathPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleDeathPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleDeathPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name game.BattleDeathPushNotify.Type
         * @enum {number}
         * @property {number} DEATH_ERROR=0 DEATH_ERROR value
         * @property {number} COLLISION=1 COLLISION value
         * @property {number} KILLED=2 KILLED value
         */
        BattleDeathPushNotify.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEATH_ERROR"] = 0;
            values[valuesById[1] = "COLLISION"] = 1;
            values[valuesById[2] = "KILLED"] = 2;
            return values;
        })();

        return BattleDeathPushNotify;
    })();

    game.BattleLookAdvertReviveRequest = (function() {

        /**
         * Properties of a BattleLookAdvertReviveRequest.
         * @memberof game
         * @interface IBattleLookAdvertReviveRequest
         */

        /**
         * Constructs a new BattleLookAdvertReviveRequest.
         * @memberof game
         * @classdesc Represents a BattleLookAdvertReviveRequest.
         * @implements IBattleLookAdvertReviveRequest
         * @constructor
         * @param {game.IBattleLookAdvertReviveRequest=} [properties] Properties to set
         */
        function BattleLookAdvertReviveRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleLookAdvertReviveRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {game.IBattleLookAdvertReviveRequest=} [properties] Properties to set
         * @returns {game.BattleLookAdvertReviveRequest} BattleLookAdvertReviveRequest instance
         */
        BattleLookAdvertReviveRequest.create = function create(properties) {
            return new BattleLookAdvertReviveRequest(properties);
        };

        /**
         * Encodes the specified BattleLookAdvertReviveRequest message. Does not implicitly {@link game.BattleLookAdvertReviveRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {game.IBattleLookAdvertReviveRequest} message BattleLookAdvertReviveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLookAdvertReviveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleLookAdvertReviveRequest message, length delimited. Does not implicitly {@link game.BattleLookAdvertReviveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {game.IBattleLookAdvertReviveRequest} message BattleLookAdvertReviveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLookAdvertReviveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLookAdvertReviveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleLookAdvertReviveRequest} BattleLookAdvertReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLookAdvertReviveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleLookAdvertReviveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLookAdvertReviveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleLookAdvertReviveRequest} BattleLookAdvertReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLookAdvertReviveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLookAdvertReviveRequest message.
         * @function verify
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLookAdvertReviveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleLookAdvertReviveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleLookAdvertReviveRequest} BattleLookAdvertReviveRequest
         */
        BattleLookAdvertReviveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleLookAdvertReviveRequest)
                return object;
            return new $root.game.BattleLookAdvertReviveRequest();
        };

        /**
         * Creates a plain object from a BattleLookAdvertReviveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleLookAdvertReviveRequest
         * @static
         * @param {game.BattleLookAdvertReviveRequest} message BattleLookAdvertReviveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLookAdvertReviveRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleLookAdvertReviveRequest to JSON.
         * @function toJSON
         * @memberof game.BattleLookAdvertReviveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLookAdvertReviveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLookAdvertReviveRequest;
    })();

    game.BattleLookAdvertReviveResponse = (function() {

        /**
         * Properties of a BattleLookAdvertReviveResponse.
         * @memberof game
         * @interface IBattleLookAdvertReviveResponse
         * @property {game.ISelf|null} [self] BattleLookAdvertReviveResponse self
         */

        /**
         * Constructs a new BattleLookAdvertReviveResponse.
         * @memberof game
         * @classdesc Represents a BattleLookAdvertReviveResponse.
         * @implements IBattleLookAdvertReviveResponse
         * @constructor
         * @param {game.IBattleLookAdvertReviveResponse=} [properties] Properties to set
         */
        function BattleLookAdvertReviveResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleLookAdvertReviveResponse self.
         * @member {game.ISelf|null|undefined} self
         * @memberof game.BattleLookAdvertReviveResponse
         * @instance
         */
        BattleLookAdvertReviveResponse.prototype.self = null;

        /**
         * Creates a new BattleLookAdvertReviveResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {game.IBattleLookAdvertReviveResponse=} [properties] Properties to set
         * @returns {game.BattleLookAdvertReviveResponse} BattleLookAdvertReviveResponse instance
         */
        BattleLookAdvertReviveResponse.create = function create(properties) {
            return new BattleLookAdvertReviveResponse(properties);
        };

        /**
         * Encodes the specified BattleLookAdvertReviveResponse message. Does not implicitly {@link game.BattleLookAdvertReviveResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {game.IBattleLookAdvertReviveResponse} message BattleLookAdvertReviveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLookAdvertReviveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self != null && Object.hasOwnProperty.call(message, "self"))
                $root.game.Self.encode(message.self, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleLookAdvertReviveResponse message, length delimited. Does not implicitly {@link game.BattleLookAdvertReviveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {game.IBattleLookAdvertReviveResponse} message BattleLookAdvertReviveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleLookAdvertReviveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleLookAdvertReviveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleLookAdvertReviveResponse} BattleLookAdvertReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLookAdvertReviveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleLookAdvertReviveResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self = $root.game.Self.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleLookAdvertReviveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleLookAdvertReviveResponse} BattleLookAdvertReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleLookAdvertReviveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleLookAdvertReviveResponse message.
         * @function verify
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleLookAdvertReviveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.self != null && message.hasOwnProperty("self")) {
                var error = $root.game.Self.verify(message.self);
                if (error)
                    return "self." + error;
            }
            return null;
        };

        /**
         * Creates a BattleLookAdvertReviveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleLookAdvertReviveResponse} BattleLookAdvertReviveResponse
         */
        BattleLookAdvertReviveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleLookAdvertReviveResponse)
                return object;
            var message = new $root.game.BattleLookAdvertReviveResponse();
            if (object.self != null) {
                if (typeof object.self !== "object")
                    throw TypeError(".game.BattleLookAdvertReviveResponse.self: object expected");
                message.self = $root.game.Self.fromObject(object.self);
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleLookAdvertReviveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleLookAdvertReviveResponse
         * @static
         * @param {game.BattleLookAdvertReviveResponse} message BattleLookAdvertReviveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleLookAdvertReviveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.self = null;
            if (message.self != null && message.hasOwnProperty("self"))
                object.self = $root.game.Self.toObject(message.self, options);
            return object;
        };

        /**
         * Converts this BattleLookAdvertReviveResponse to JSON.
         * @function toJSON
         * @memberof game.BattleLookAdvertReviveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleLookAdvertReviveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleLookAdvertReviveResponse;
    })();

    game.BattleRevivePushNotify = (function() {

        /**
         * Properties of a BattleRevivePushNotify.
         * @memberof game
         * @interface IBattleRevivePushNotify
         * @property {game.IPlayer|null} [player] BattleRevivePushNotify player
         */

        /**
         * Constructs a new BattleRevivePushNotify.
         * @memberof game
         * @classdesc Represents a BattleRevivePushNotify.
         * @implements IBattleRevivePushNotify
         * @constructor
         * @param {game.IBattleRevivePushNotify=} [properties] Properties to set
         */
        function BattleRevivePushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleRevivePushNotify player.
         * @member {game.IPlayer|null|undefined} player
         * @memberof game.BattleRevivePushNotify
         * @instance
         */
        BattleRevivePushNotify.prototype.player = null;

        /**
         * Creates a new BattleRevivePushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {game.IBattleRevivePushNotify=} [properties] Properties to set
         * @returns {game.BattleRevivePushNotify} BattleRevivePushNotify instance
         */
        BattleRevivePushNotify.create = function create(properties) {
            return new BattleRevivePushNotify(properties);
        };

        /**
         * Encodes the specified BattleRevivePushNotify message. Does not implicitly {@link game.BattleRevivePushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {game.IBattleRevivePushNotify} message BattleRevivePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleRevivePushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.game.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleRevivePushNotify message, length delimited. Does not implicitly {@link game.BattleRevivePushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {game.IBattleRevivePushNotify} message BattleRevivePushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleRevivePushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleRevivePushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleRevivePushNotify} BattleRevivePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleRevivePushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleRevivePushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.game.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleRevivePushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleRevivePushNotify} BattleRevivePushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleRevivePushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleRevivePushNotify message.
         * @function verify
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleRevivePushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.game.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a BattleRevivePushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleRevivePushNotify} BattleRevivePushNotify
         */
        BattleRevivePushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleRevivePushNotify)
                return object;
            var message = new $root.game.BattleRevivePushNotify();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".game.BattleRevivePushNotify.player: object expected");
                message.player = $root.game.Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleRevivePushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleRevivePushNotify
         * @static
         * @param {game.BattleRevivePushNotify} message BattleRevivePushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleRevivePushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.player = null;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.game.Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this BattleRevivePushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleRevivePushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleRevivePushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleRevivePushNotify;
    })();

    game.BattleFlushEnergyPushNotify = (function() {

        /**
         * Properties of a BattleFlushEnergyPushNotify.
         * @memberof game
         * @interface IBattleFlushEnergyPushNotify
         * @property {Array.<game.IEnergy>|null} [energies] BattleFlushEnergyPushNotify energies
         */

        /**
         * Constructs a new BattleFlushEnergyPushNotify.
         * @memberof game
         * @classdesc Represents a BattleFlushEnergyPushNotify.
         * @implements IBattleFlushEnergyPushNotify
         * @constructor
         * @param {game.IBattleFlushEnergyPushNotify=} [properties] Properties to set
         */
        function BattleFlushEnergyPushNotify(properties) {
            this.energies = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleFlushEnergyPushNotify energies.
         * @member {Array.<game.IEnergy>} energies
         * @memberof game.BattleFlushEnergyPushNotify
         * @instance
         */
        BattleFlushEnergyPushNotify.prototype.energies = $util.emptyArray;

        /**
         * Creates a new BattleFlushEnergyPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {game.IBattleFlushEnergyPushNotify=} [properties] Properties to set
         * @returns {game.BattleFlushEnergyPushNotify} BattleFlushEnergyPushNotify instance
         */
        BattleFlushEnergyPushNotify.create = function create(properties) {
            return new BattleFlushEnergyPushNotify(properties);
        };

        /**
         * Encodes the specified BattleFlushEnergyPushNotify message. Does not implicitly {@link game.BattleFlushEnergyPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {game.IBattleFlushEnergyPushNotify} message BattleFlushEnergyPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFlushEnergyPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.energies != null && message.energies.length)
                for (var i = 0; i < message.energies.length; ++i)
                    $root.game.Energy.encode(message.energies[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleFlushEnergyPushNotify message, length delimited. Does not implicitly {@link game.BattleFlushEnergyPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {game.IBattleFlushEnergyPushNotify} message BattleFlushEnergyPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleFlushEnergyPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleFlushEnergyPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleFlushEnergyPushNotify} BattleFlushEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFlushEnergyPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleFlushEnergyPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.energies && message.energies.length))
                        message.energies = [];
                    message.energies.push($root.game.Energy.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleFlushEnergyPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleFlushEnergyPushNotify} BattleFlushEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleFlushEnergyPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleFlushEnergyPushNotify message.
         * @function verify
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleFlushEnergyPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.energies != null && message.hasOwnProperty("energies")) {
                if (!Array.isArray(message.energies))
                    return "energies: array expected";
                for (var i = 0; i < message.energies.length; ++i) {
                    var error = $root.game.Energy.verify(message.energies[i]);
                    if (error)
                        return "energies." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleFlushEnergyPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleFlushEnergyPushNotify} BattleFlushEnergyPushNotify
         */
        BattleFlushEnergyPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleFlushEnergyPushNotify)
                return object;
            var message = new $root.game.BattleFlushEnergyPushNotify();
            if (object.energies) {
                if (!Array.isArray(object.energies))
                    throw TypeError(".game.BattleFlushEnergyPushNotify.energies: array expected");
                message.energies = [];
                for (var i = 0; i < object.energies.length; ++i) {
                    if (typeof object.energies[i] !== "object")
                        throw TypeError(".game.BattleFlushEnergyPushNotify.energies: object expected");
                    message.energies[i] = $root.game.Energy.fromObject(object.energies[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleFlushEnergyPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleFlushEnergyPushNotify
         * @static
         * @param {game.BattleFlushEnergyPushNotify} message BattleFlushEnergyPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleFlushEnergyPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.energies = [];
            if (message.energies && message.energies.length) {
                object.energies = [];
                for (var j = 0; j < message.energies.length; ++j)
                    object.energies[j] = $root.game.Energy.toObject(message.energies[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleFlushEnergyPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleFlushEnergyPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleFlushEnergyPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleFlushEnergyPushNotify;
    })();

    game.BattleTakeEnergyPushNotify = (function() {

        /**
         * Properties of a BattleTakeEnergyPushNotify.
         * @memberof game
         * @interface IBattleTakeEnergyPushNotify
         * @property {Array.<number|Long>|null} [energyIds] BattleTakeEnergyPushNotify energyIds
         * @property {number|Long|null} [uid] BattleTakeEnergyPushNotify uid
         */

        /**
         * Constructs a new BattleTakeEnergyPushNotify.
         * @memberof game
         * @classdesc Represents a BattleTakeEnergyPushNotify.
         * @implements IBattleTakeEnergyPushNotify
         * @constructor
         * @param {game.IBattleTakeEnergyPushNotify=} [properties] Properties to set
         */
        function BattleTakeEnergyPushNotify(properties) {
            this.energyIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleTakeEnergyPushNotify energyIds.
         * @member {Array.<number|Long>} energyIds
         * @memberof game.BattleTakeEnergyPushNotify
         * @instance
         */
        BattleTakeEnergyPushNotify.prototype.energyIds = $util.emptyArray;

        /**
         * BattleTakeEnergyPushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleTakeEnergyPushNotify
         * @instance
         */
        BattleTakeEnergyPushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BattleTakeEnergyPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {game.IBattleTakeEnergyPushNotify=} [properties] Properties to set
         * @returns {game.BattleTakeEnergyPushNotify} BattleTakeEnergyPushNotify instance
         */
        BattleTakeEnergyPushNotify.create = function create(properties) {
            return new BattleTakeEnergyPushNotify(properties);
        };

        /**
         * Encodes the specified BattleTakeEnergyPushNotify message. Does not implicitly {@link game.BattleTakeEnergyPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {game.IBattleTakeEnergyPushNotify} message BattleTakeEnergyPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleTakeEnergyPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.energyIds != null && message.energyIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.energyIds.length; ++i)
                    writer.sint64(message.energyIds[i]);
                writer.ldelim();
            }
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified BattleTakeEnergyPushNotify message, length delimited. Does not implicitly {@link game.BattleTakeEnergyPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {game.IBattleTakeEnergyPushNotify} message BattleTakeEnergyPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleTakeEnergyPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleTakeEnergyPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleTakeEnergyPushNotify} BattleTakeEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleTakeEnergyPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleTakeEnergyPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.energyIds && message.energyIds.length))
                        message.energyIds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.energyIds.push(reader.sint64());
                    } else
                        message.energyIds.push(reader.sint64());
                    break;
                case 2:
                    message.uid = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleTakeEnergyPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleTakeEnergyPushNotify} BattleTakeEnergyPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleTakeEnergyPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleTakeEnergyPushNotify message.
         * @function verify
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleTakeEnergyPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.energyIds != null && message.hasOwnProperty("energyIds")) {
                if (!Array.isArray(message.energyIds))
                    return "energyIds: array expected";
                for (var i = 0; i < message.energyIds.length; ++i)
                    if (!$util.isInteger(message.energyIds[i]) && !(message.energyIds[i] && $util.isInteger(message.energyIds[i].low) && $util.isInteger(message.energyIds[i].high)))
                        return "energyIds: integer|Long[] expected";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a BattleTakeEnergyPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleTakeEnergyPushNotify} BattleTakeEnergyPushNotify
         */
        BattleTakeEnergyPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleTakeEnergyPushNotify)
                return object;
            var message = new $root.game.BattleTakeEnergyPushNotify();
            if (object.energyIds) {
                if (!Array.isArray(object.energyIds))
                    throw TypeError(".game.BattleTakeEnergyPushNotify.energyIds: array expected");
                message.energyIds = [];
                for (var i = 0; i < object.energyIds.length; ++i)
                    if ($util.Long)
                        (message.energyIds[i] = $util.Long.fromValue(object.energyIds[i])).unsigned = false;
                    else if (typeof object.energyIds[i] === "string")
                        message.energyIds[i] = parseInt(object.energyIds[i], 10);
                    else if (typeof object.energyIds[i] === "number")
                        message.energyIds[i] = object.energyIds[i];
                    else if (typeof object.energyIds[i] === "object")
                        message.energyIds[i] = new $util.LongBits(object.energyIds[i].low >>> 0, object.energyIds[i].high >>> 0).toNumber();
            }
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BattleTakeEnergyPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleTakeEnergyPushNotify
         * @static
         * @param {game.BattleTakeEnergyPushNotify} message BattleTakeEnergyPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleTakeEnergyPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.energyIds = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.energyIds && message.energyIds.length) {
                object.energyIds = [];
                for (var j = 0; j < message.energyIds.length; ++j)
                    if (typeof message.energyIds[j] === "number")
                        object.energyIds[j] = options.longs === String ? String(message.energyIds[j]) : message.energyIds[j];
                    else
                        object.energyIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.energyIds[j]) : options.longs === Number ? new $util.LongBits(message.energyIds[j].low >>> 0, message.energyIds[j].high >>> 0).toNumber() : message.energyIds[j];
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this BattleTakeEnergyPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleTakeEnergyPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleTakeEnergyPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleTakeEnergyPushNotify;
    })();

    game.BattleOverRequest = (function() {

        /**
         * Properties of a BattleOverRequest.
         * @memberof game
         * @interface IBattleOverRequest
         */

        /**
         * Constructs a new BattleOverRequest.
         * @memberof game
         * @classdesc Represents a BattleOverRequest.
         * @implements IBattleOverRequest
         * @constructor
         * @param {game.IBattleOverRequest=} [properties] Properties to set
         */
        function BattleOverRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleOverRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleOverRequest
         * @static
         * @param {game.IBattleOverRequest=} [properties] Properties to set
         * @returns {game.BattleOverRequest} BattleOverRequest instance
         */
        BattleOverRequest.create = function create(properties) {
            return new BattleOverRequest(properties);
        };

        /**
         * Encodes the specified BattleOverRequest message. Does not implicitly {@link game.BattleOverRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleOverRequest
         * @static
         * @param {game.IBattleOverRequest} message BattleOverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOverRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleOverRequest message, length delimited. Does not implicitly {@link game.BattleOverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleOverRequest
         * @static
         * @param {game.IBattleOverRequest} message BattleOverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOverRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleOverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleOverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleOverRequest} BattleOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOverRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleOverRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleOverRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleOverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleOverRequest} BattleOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOverRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleOverRequest message.
         * @function verify
         * @memberof game.BattleOverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleOverRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleOverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleOverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleOverRequest} BattleOverRequest
         */
        BattleOverRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleOverRequest)
                return object;
            return new $root.game.BattleOverRequest();
        };

        /**
         * Creates a plain object from a BattleOverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleOverRequest
         * @static
         * @param {game.BattleOverRequest} message BattleOverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleOverRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleOverRequest to JSON.
         * @function toJSON
         * @memberof game.BattleOverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleOverRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleOverRequest;
    })();

    game.BattleOverResponse = (function() {

        /**
         * Properties of a BattleOverResponse.
         * @memberof game
         * @interface IBattleOverResponse
         * @property {number|null} [length] BattleOverResponse length
         * @property {number|null} [killCount] BattleOverResponse killCount
         * @property {number|null} [surpass] BattleOverResponse surpass
         */

        /**
         * Constructs a new BattleOverResponse.
         * @memberof game
         * @classdesc Represents a BattleOverResponse.
         * @implements IBattleOverResponse
         * @constructor
         * @param {game.IBattleOverResponse=} [properties] Properties to set
         */
        function BattleOverResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleOverResponse length.
         * @member {number} length
         * @memberof game.BattleOverResponse
         * @instance
         */
        BattleOverResponse.prototype.length = 0;

        /**
         * BattleOverResponse killCount.
         * @member {number} killCount
         * @memberof game.BattleOverResponse
         * @instance
         */
        BattleOverResponse.prototype.killCount = 0;

        /**
         * BattleOverResponse surpass.
         * @member {number} surpass
         * @memberof game.BattleOverResponse
         * @instance
         */
        BattleOverResponse.prototype.surpass = 0;

        /**
         * Creates a new BattleOverResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleOverResponse
         * @static
         * @param {game.IBattleOverResponse=} [properties] Properties to set
         * @returns {game.BattleOverResponse} BattleOverResponse instance
         */
        BattleOverResponse.create = function create(properties) {
            return new BattleOverResponse(properties);
        };

        /**
         * Encodes the specified BattleOverResponse message. Does not implicitly {@link game.BattleOverResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleOverResponse
         * @static
         * @param {game.IBattleOverResponse} message BattleOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOverResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.length);
            if (message.killCount != null && Object.hasOwnProperty.call(message, "killCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.killCount);
            if (message.surpass != null && Object.hasOwnProperty.call(message, "surpass"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.surpass);
            return writer;
        };

        /**
         * Encodes the specified BattleOverResponse message, length delimited. Does not implicitly {@link game.BattleOverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleOverResponse
         * @static
         * @param {game.IBattleOverResponse} message BattleOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleOverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleOverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleOverResponse} BattleOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOverResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleOverResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.length = reader.int32();
                    break;
                case 2:
                    message.killCount = reader.int32();
                    break;
                case 3:
                    message.surpass = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleOverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleOverResponse} BattleOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleOverResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleOverResponse message.
         * @function verify
         * @memberof game.BattleOverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleOverResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            if (message.surpass != null && message.hasOwnProperty("surpass"))
                if (!$util.isInteger(message.surpass))
                    return "surpass: integer expected";
            return null;
        };

        /**
         * Creates a BattleOverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleOverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleOverResponse} BattleOverResponse
         */
        BattleOverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleOverResponse)
                return object;
            var message = new $root.game.BattleOverResponse();
            if (object.length != null)
                message.length = object.length | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.surpass != null)
                message.surpass = object.surpass | 0;
            return message;
        };

        /**
         * Creates a plain object from a BattleOverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleOverResponse
         * @static
         * @param {game.BattleOverResponse} message BattleOverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleOverResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.length = 0;
                object.killCount = 0;
                object.surpass = 0;
            }
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.surpass != null && message.hasOwnProperty("surpass"))
                object.surpass = message.surpass;
            return object;
        };

        /**
         * Converts this BattleOverResponse to JSON.
         * @function toJSON
         * @memberof game.BattleOverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleOverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleOverResponse;
    })();

    game.BattleSnakeSpeedUpRequest = (function() {

        /**
         * Properties of a BattleSnakeSpeedUpRequest.
         * @memberof game
         * @interface IBattleSnakeSpeedUpRequest
         * @property {game.BattleSnakeSpeedUpRequest.OpType|null} [op] BattleSnakeSpeedUpRequest op
         */

        /**
         * Constructs a new BattleSnakeSpeedUpRequest.
         * @memberof game
         * @classdesc Represents a BattleSnakeSpeedUpRequest.
         * @implements IBattleSnakeSpeedUpRequest
         * @constructor
         * @param {game.IBattleSnakeSpeedUpRequest=} [properties] Properties to set
         */
        function BattleSnakeSpeedUpRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSnakeSpeedUpRequest op.
         * @member {game.BattleSnakeSpeedUpRequest.OpType} op
         * @memberof game.BattleSnakeSpeedUpRequest
         * @instance
         */
        BattleSnakeSpeedUpRequest.prototype.op = 0;

        /**
         * Creates a new BattleSnakeSpeedUpRequest instance using the specified properties.
         * @function create
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {game.IBattleSnakeSpeedUpRequest=} [properties] Properties to set
         * @returns {game.BattleSnakeSpeedUpRequest} BattleSnakeSpeedUpRequest instance
         */
        BattleSnakeSpeedUpRequest.create = function create(properties) {
            return new BattleSnakeSpeedUpRequest(properties);
        };

        /**
         * Encodes the specified BattleSnakeSpeedUpRequest message. Does not implicitly {@link game.BattleSnakeSpeedUpRequest.verify|verify} messages.
         * @function encode
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {game.IBattleSnakeSpeedUpRequest} message BattleSnakeSpeedUpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeSpeedUpRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
            return writer;
        };

        /**
         * Encodes the specified BattleSnakeSpeedUpRequest message, length delimited. Does not implicitly {@link game.BattleSnakeSpeedUpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {game.IBattleSnakeSpeedUpRequest} message BattleSnakeSpeedUpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeSpeedUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSnakeSpeedUpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleSnakeSpeedUpRequest} BattleSnakeSpeedUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeSpeedUpRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleSnakeSpeedUpRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.op = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSnakeSpeedUpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleSnakeSpeedUpRequest} BattleSnakeSpeedUpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeSpeedUpRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSnakeSpeedUpRequest message.
         * @function verify
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSnakeSpeedUpRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.op != null && message.hasOwnProperty("op"))
                switch (message.op) {
                default:
                    return "op: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a BattleSnakeSpeedUpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleSnakeSpeedUpRequest} BattleSnakeSpeedUpRequest
         */
        BattleSnakeSpeedUpRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleSnakeSpeedUpRequest)
                return object;
            var message = new $root.game.BattleSnakeSpeedUpRequest();
            switch (object.op) {
            case "ERROR":
            case 0:
                message.op = 0;
                break;
            case "SPEED":
            case 1:
                message.op = 1;
                break;
            case "STOP":
            case 2:
                message.op = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleSnakeSpeedUpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleSnakeSpeedUpRequest
         * @static
         * @param {game.BattleSnakeSpeedUpRequest} message BattleSnakeSpeedUpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSnakeSpeedUpRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.op = options.enums === String ? "ERROR" : 0;
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = options.enums === String ? $root.game.BattleSnakeSpeedUpRequest.OpType[message.op] : message.op;
            return object;
        };

        /**
         * Converts this BattleSnakeSpeedUpRequest to JSON.
         * @function toJSON
         * @memberof game.BattleSnakeSpeedUpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSnakeSpeedUpRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * OpType enum.
         * @name game.BattleSnakeSpeedUpRequest.OpType
         * @enum {number}
         * @property {number} ERROR=0 ERROR value
         * @property {number} SPEED=1 SPEED value
         * @property {number} STOP=2 STOP value
         */
        BattleSnakeSpeedUpRequest.OpType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "SPEED"] = 1;
            values[valuesById[2] = "STOP"] = 2;
            return values;
        })();

        return BattleSnakeSpeedUpRequest;
    })();

    game.BattleSnakeSpeedUpResponse = (function() {

        /**
         * Properties of a BattleSnakeSpeedUpResponse.
         * @memberof game
         * @interface IBattleSnakeSpeedUpResponse
         */

        /**
         * Constructs a new BattleSnakeSpeedUpResponse.
         * @memberof game
         * @classdesc Represents a BattleSnakeSpeedUpResponse.
         * @implements IBattleSnakeSpeedUpResponse
         * @constructor
         * @param {game.IBattleSnakeSpeedUpResponse=} [properties] Properties to set
         */
        function BattleSnakeSpeedUpResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BattleSnakeSpeedUpResponse instance using the specified properties.
         * @function create
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {game.IBattleSnakeSpeedUpResponse=} [properties] Properties to set
         * @returns {game.BattleSnakeSpeedUpResponse} BattleSnakeSpeedUpResponse instance
         */
        BattleSnakeSpeedUpResponse.create = function create(properties) {
            return new BattleSnakeSpeedUpResponse(properties);
        };

        /**
         * Encodes the specified BattleSnakeSpeedUpResponse message. Does not implicitly {@link game.BattleSnakeSpeedUpResponse.verify|verify} messages.
         * @function encode
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {game.IBattleSnakeSpeedUpResponse} message BattleSnakeSpeedUpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeSpeedUpResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BattleSnakeSpeedUpResponse message, length delimited. Does not implicitly {@link game.BattleSnakeSpeedUpResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {game.IBattleSnakeSpeedUpResponse} message BattleSnakeSpeedUpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeSpeedUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSnakeSpeedUpResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleSnakeSpeedUpResponse} BattleSnakeSpeedUpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeSpeedUpResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleSnakeSpeedUpResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSnakeSpeedUpResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleSnakeSpeedUpResponse} BattleSnakeSpeedUpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeSpeedUpResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSnakeSpeedUpResponse message.
         * @function verify
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSnakeSpeedUpResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BattleSnakeSpeedUpResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleSnakeSpeedUpResponse} BattleSnakeSpeedUpResponse
         */
        BattleSnakeSpeedUpResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleSnakeSpeedUpResponse)
                return object;
            return new $root.game.BattleSnakeSpeedUpResponse();
        };

        /**
         * Creates a plain object from a BattleSnakeSpeedUpResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleSnakeSpeedUpResponse
         * @static
         * @param {game.BattleSnakeSpeedUpResponse} message BattleSnakeSpeedUpResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSnakeSpeedUpResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BattleSnakeSpeedUpResponse to JSON.
         * @function toJSON
         * @memberof game.BattleSnakeSpeedUpResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSnakeSpeedUpResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleSnakeSpeedUpResponse;
    })();

    game.BattleSnakeEffectPushNotify = (function() {

        /**
         * Properties of a BattleSnakeEffectPushNotify.
         * @memberof game
         * @interface IBattleSnakeEffectPushNotify
         * @property {game.BattleSnakeEffectPushNotify.OpType|null} [op] BattleSnakeEffectPushNotify op
         * @property {number|Long|null} [uid] BattleSnakeEffectPushNotify uid
         * @property {game.BattleSnakeEffectPushNotify.EffectType|null} [effect] BattleSnakeEffectPushNotify effect
         */

        /**
         * Constructs a new BattleSnakeEffectPushNotify.
         * @memberof game
         * @classdesc Represents a BattleSnakeEffectPushNotify.
         * @implements IBattleSnakeEffectPushNotify
         * @constructor
         * @param {game.IBattleSnakeEffectPushNotify=} [properties] Properties to set
         */
        function BattleSnakeEffectPushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleSnakeEffectPushNotify op.
         * @member {game.BattleSnakeEffectPushNotify.OpType} op
         * @memberof game.BattleSnakeEffectPushNotify
         * @instance
         */
        BattleSnakeEffectPushNotify.prototype.op = 0;

        /**
         * BattleSnakeEffectPushNotify uid.
         * @member {number|Long} uid
         * @memberof game.BattleSnakeEffectPushNotify
         * @instance
         */
        BattleSnakeEffectPushNotify.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BattleSnakeEffectPushNotify effect.
         * @member {game.BattleSnakeEffectPushNotify.EffectType} effect
         * @memberof game.BattleSnakeEffectPushNotify
         * @instance
         */
        BattleSnakeEffectPushNotify.prototype.effect = 0;

        /**
         * Creates a new BattleSnakeEffectPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {game.IBattleSnakeEffectPushNotify=} [properties] Properties to set
         * @returns {game.BattleSnakeEffectPushNotify} BattleSnakeEffectPushNotify instance
         */
        BattleSnakeEffectPushNotify.create = function create(properties) {
            return new BattleSnakeEffectPushNotify(properties);
        };

        /**
         * Encodes the specified BattleSnakeEffectPushNotify message. Does not implicitly {@link game.BattleSnakeEffectPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {game.IBattleSnakeEffectPushNotify} message BattleSnakeEffectPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeEffectPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.op);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.effect != null && Object.hasOwnProperty.call(message, "effect"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.effect);
            return writer;
        };

        /**
         * Encodes the specified BattleSnakeEffectPushNotify message, length delimited. Does not implicitly {@link game.BattleSnakeEffectPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {game.IBattleSnakeEffectPushNotify} message BattleSnakeEffectPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleSnakeEffectPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleSnakeEffectPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleSnakeEffectPushNotify} BattleSnakeEffectPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeEffectPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleSnakeEffectPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.op = reader.int32();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.effect = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleSnakeEffectPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleSnakeEffectPushNotify} BattleSnakeEffectPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleSnakeEffectPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleSnakeEffectPushNotify message.
         * @function verify
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleSnakeEffectPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.op != null && message.hasOwnProperty("op"))
                switch (message.op) {
                default:
                    return "op: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.effect != null && message.hasOwnProperty("effect"))
                switch (message.effect) {
                default:
                    return "effect: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a BattleSnakeEffectPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleSnakeEffectPushNotify} BattleSnakeEffectPushNotify
         */
        BattleSnakeEffectPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleSnakeEffectPushNotify)
                return object;
            var message = new $root.game.BattleSnakeEffectPushNotify();
            switch (object.op) {
            case "ERROR":
            case 0:
                message.op = 0;
                break;
            case "ADD":
            case 1:
                message.op = 1;
                break;
            case "REMOVE":
            case 2:
                message.op = 2;
                break;
            }
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            switch (object.effect) {
            case "ILLEGAL":
            case 0:
                message.effect = 0;
                break;
            case "SPEED":
            case 1:
                message.effect = 1;
                break;
            case "PROTECT":
            case 2:
                message.effect = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleSnakeEffectPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleSnakeEffectPushNotify
         * @static
         * @param {game.BattleSnakeEffectPushNotify} message BattleSnakeEffectPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleSnakeEffectPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.op = options.enums === String ? "ERROR" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.effect = options.enums === String ? "ILLEGAL" : 0;
            }
            if (message.op != null && message.hasOwnProperty("op"))
                object.op = options.enums === String ? $root.game.BattleSnakeEffectPushNotify.OpType[message.op] : message.op;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.effect != null && message.hasOwnProperty("effect"))
                object.effect = options.enums === String ? $root.game.BattleSnakeEffectPushNotify.EffectType[message.effect] : message.effect;
            return object;
        };

        /**
         * Converts this BattleSnakeEffectPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleSnakeEffectPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleSnakeEffectPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * OpType enum.
         * @name game.BattleSnakeEffectPushNotify.OpType
         * @enum {number}
         * @property {number} ERROR=0 ERROR value
         * @property {number} ADD=1 ADD value
         * @property {number} REMOVE=2 REMOVE value
         */
        BattleSnakeEffectPushNotify.OpType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "ADD"] = 1;
            values[valuesById[2] = "REMOVE"] = 2;
            return values;
        })();

        /**
         * EffectType enum.
         * @name game.BattleSnakeEffectPushNotify.EffectType
         * @enum {number}
         * @property {number} ILLEGAL=0 ILLEGAL value
         * @property {number} SPEED=1 SPEED value
         * @property {number} PROTECT=2 PROTECT value
         */
        BattleSnakeEffectPushNotify.EffectType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ILLEGAL"] = 0;
            values[valuesById[1] = "SPEED"] = 1;
            values[valuesById[2] = "PROTECT"] = 2;
            return values;
        })();

        return BattleSnakeEffectPushNotify;
    })();

    game.BattleKillBroadcastPushNotify = (function() {

        /**
         * Properties of a BattleKillBroadcastPushNotify.
         * @memberof game
         * @interface IBattleKillBroadcastPushNotify
         * @property {string|null} [killName] BattleKillBroadcastPushNotify killName
         * @property {string|null} [deathName] BattleKillBroadcastPushNotify deathName
         * @property {game.BattleKillBroadcastPushNotify.KillType|null} [killType] BattleKillBroadcastPushNotify killType
         */

        /**
         * Constructs a new BattleKillBroadcastPushNotify.
         * @memberof game
         * @classdesc Represents a BattleKillBroadcastPushNotify.
         * @implements IBattleKillBroadcastPushNotify
         * @constructor
         * @param {game.IBattleKillBroadcastPushNotify=} [properties] Properties to set
         */
        function BattleKillBroadcastPushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleKillBroadcastPushNotify killName.
         * @member {string} killName
         * @memberof game.BattleKillBroadcastPushNotify
         * @instance
         */
        BattleKillBroadcastPushNotify.prototype.killName = "";

        /**
         * BattleKillBroadcastPushNotify deathName.
         * @member {string} deathName
         * @memberof game.BattleKillBroadcastPushNotify
         * @instance
         */
        BattleKillBroadcastPushNotify.prototype.deathName = "";

        /**
         * BattleKillBroadcastPushNotify killType.
         * @member {game.BattleKillBroadcastPushNotify.KillType} killType
         * @memberof game.BattleKillBroadcastPushNotify
         * @instance
         */
        BattleKillBroadcastPushNotify.prototype.killType = 0;

        /**
         * Creates a new BattleKillBroadcastPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {game.IBattleKillBroadcastPushNotify=} [properties] Properties to set
         * @returns {game.BattleKillBroadcastPushNotify} BattleKillBroadcastPushNotify instance
         */
        BattleKillBroadcastPushNotify.create = function create(properties) {
            return new BattleKillBroadcastPushNotify(properties);
        };

        /**
         * Encodes the specified BattleKillBroadcastPushNotify message. Does not implicitly {@link game.BattleKillBroadcastPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {game.IBattleKillBroadcastPushNotify} message BattleKillBroadcastPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleKillBroadcastPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.killName != null && Object.hasOwnProperty.call(message, "killName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.killName);
            if (message.deathName != null && Object.hasOwnProperty.call(message, "deathName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deathName);
            if (message.killType != null && Object.hasOwnProperty.call(message, "killType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.killType);
            return writer;
        };

        /**
         * Encodes the specified BattleKillBroadcastPushNotify message, length delimited. Does not implicitly {@link game.BattleKillBroadcastPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {game.IBattleKillBroadcastPushNotify} message BattleKillBroadcastPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleKillBroadcastPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleKillBroadcastPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleKillBroadcastPushNotify} BattleKillBroadcastPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleKillBroadcastPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleKillBroadcastPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.killName = reader.string();
                    break;
                case 2:
                    message.deathName = reader.string();
                    break;
                case 3:
                    message.killType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleKillBroadcastPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleKillBroadcastPushNotify} BattleKillBroadcastPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleKillBroadcastPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleKillBroadcastPushNotify message.
         * @function verify
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleKillBroadcastPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.killName != null && message.hasOwnProperty("killName"))
                if (!$util.isString(message.killName))
                    return "killName: string expected";
            if (message.deathName != null && message.hasOwnProperty("deathName"))
                if (!$util.isString(message.deathName))
                    return "deathName: string expected";
            if (message.killType != null && message.hasOwnProperty("killType"))
                switch (message.killType) {
                default:
                    return "killType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            return null;
        };

        /**
         * Creates a BattleKillBroadcastPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleKillBroadcastPushNotify} BattleKillBroadcastPushNotify
         */
        BattleKillBroadcastPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleKillBroadcastPushNotify)
                return object;
            var message = new $root.game.BattleKillBroadcastPushNotify();
            if (object.killName != null)
                message.killName = String(object.killName);
            if (object.deathName != null)
                message.deathName = String(object.deathName);
            switch (object.killType) {
            case "KILL":
            case 0:
                message.killType = 0;
                break;
            case "FIRST":
            case 1:
                message.killType = 1;
                break;
            case "THREE":
            case 2:
                message.killType = 2;
                break;
            case "FOUR":
            case 3:
                message.killType = 3;
                break;
            case "FIVE":
            case 5:
                message.killType = 5;
                break;
            case "SIX":
            case 6:
                message.killType = 6;
                break;
            case "SEVEN":
            case 7:
                message.killType = 7;
                break;
            case "EIGHT":
            case 8:
                message.killType = 8;
                break;
            case "STOP":
            case 9:
                message.killType = 9;
                break;
            case "CRAZY":
            case 10:
                message.killType = 10;
                break;
            case "RUNAWAY":
            case 11:
                message.killType = 11;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleKillBroadcastPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleKillBroadcastPushNotify
         * @static
         * @param {game.BattleKillBroadcastPushNotify} message BattleKillBroadcastPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleKillBroadcastPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.killName = "";
                object.deathName = "";
                object.killType = options.enums === String ? "KILL" : 0;
            }
            if (message.killName != null && message.hasOwnProperty("killName"))
                object.killName = message.killName;
            if (message.deathName != null && message.hasOwnProperty("deathName"))
                object.deathName = message.deathName;
            if (message.killType != null && message.hasOwnProperty("killType"))
                object.killType = options.enums === String ? $root.game.BattleKillBroadcastPushNotify.KillType[message.killType] : message.killType;
            return object;
        };

        /**
         * Converts this BattleKillBroadcastPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleKillBroadcastPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleKillBroadcastPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * KillType enum.
         * @name game.BattleKillBroadcastPushNotify.KillType
         * @enum {number}
         * @property {number} KILL=0 KILL value
         * @property {number} FIRST=1 FIRST value
         * @property {number} THREE=2 THREE value
         * @property {number} FOUR=3 FOUR value
         * @property {number} FIVE=5 FIVE value
         * @property {number} SIX=6 SIX value
         * @property {number} SEVEN=7 SEVEN value
         * @property {number} EIGHT=8 EIGHT value
         * @property {number} STOP=9 STOP value
         * @property {number} CRAZY=10 CRAZY value
         * @property {number} RUNAWAY=11 RUNAWAY value
         */
        BattleKillBroadcastPushNotify.KillType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "KILL"] = 0;
            values[valuesById[1] = "FIRST"] = 1;
            values[valuesById[2] = "THREE"] = 2;
            values[valuesById[3] = "FOUR"] = 3;
            values[valuesById[5] = "FIVE"] = 5;
            values[valuesById[6] = "SIX"] = 6;
            values[valuesById[7] = "SEVEN"] = 7;
            values[valuesById[8] = "EIGHT"] = 8;
            values[valuesById[9] = "STOP"] = 9;
            values[valuesById[10] = "CRAZY"] = 10;
            values[valuesById[11] = "RUNAWAY"] = 11;
            return values;
        })();

        return BattleKillBroadcastPushNotify;
    })();

    game.BattleRankPushNotify = (function() {

        /**
         * Properties of a BattleRankPushNotify.
         * @memberof game
         * @interface IBattleRankPushNotify
         * @property {game.IRankItem|null} [dayBest] BattleRankPushNotify dayBest
         * @property {Array.<game.IRankItem>|null} [ranks] BattleRankPushNotify ranks
         */

        /**
         * Constructs a new BattleRankPushNotify.
         * @memberof game
         * @classdesc Represents a BattleRankPushNotify.
         * @implements IBattleRankPushNotify
         * @constructor
         * @param {game.IBattleRankPushNotify=} [properties] Properties to set
         */
        function BattleRankPushNotify(properties) {
            this.ranks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BattleRankPushNotify dayBest.
         * @member {game.IRankItem|null|undefined} dayBest
         * @memberof game.BattleRankPushNotify
         * @instance
         */
        BattleRankPushNotify.prototype.dayBest = null;

        /**
         * BattleRankPushNotify ranks.
         * @member {Array.<game.IRankItem>} ranks
         * @memberof game.BattleRankPushNotify
         * @instance
         */
        BattleRankPushNotify.prototype.ranks = $util.emptyArray;

        /**
         * Creates a new BattleRankPushNotify instance using the specified properties.
         * @function create
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {game.IBattleRankPushNotify=} [properties] Properties to set
         * @returns {game.BattleRankPushNotify} BattleRankPushNotify instance
         */
        BattleRankPushNotify.create = function create(properties) {
            return new BattleRankPushNotify(properties);
        };

        /**
         * Encodes the specified BattleRankPushNotify message. Does not implicitly {@link game.BattleRankPushNotify.verify|verify} messages.
         * @function encode
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {game.IBattleRankPushNotify} message BattleRankPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleRankPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dayBest != null && Object.hasOwnProperty.call(message, "dayBest"))
                $root.game.RankItem.encode(message.dayBest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ranks != null && message.ranks.length)
                for (var i = 0; i < message.ranks.length; ++i)
                    $root.game.RankItem.encode(message.ranks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BattleRankPushNotify message, length delimited. Does not implicitly {@link game.BattleRankPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {game.IBattleRankPushNotify} message BattleRankPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BattleRankPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BattleRankPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BattleRankPushNotify} BattleRankPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleRankPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BattleRankPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dayBest = $root.game.RankItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.ranks && message.ranks.length))
                        message.ranks = [];
                    message.ranks.push($root.game.RankItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BattleRankPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BattleRankPushNotify} BattleRankPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BattleRankPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BattleRankPushNotify message.
         * @function verify
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BattleRankPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dayBest != null && message.hasOwnProperty("dayBest")) {
                var error = $root.game.RankItem.verify(message.dayBest);
                if (error)
                    return "dayBest." + error;
            }
            if (message.ranks != null && message.hasOwnProperty("ranks")) {
                if (!Array.isArray(message.ranks))
                    return "ranks: array expected";
                for (var i = 0; i < message.ranks.length; ++i) {
                    var error = $root.game.RankItem.verify(message.ranks[i]);
                    if (error)
                        return "ranks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BattleRankPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BattleRankPushNotify} BattleRankPushNotify
         */
        BattleRankPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BattleRankPushNotify)
                return object;
            var message = new $root.game.BattleRankPushNotify();
            if (object.dayBest != null) {
                if (typeof object.dayBest !== "object")
                    throw TypeError(".game.BattleRankPushNotify.dayBest: object expected");
                message.dayBest = $root.game.RankItem.fromObject(object.dayBest);
            }
            if (object.ranks) {
                if (!Array.isArray(object.ranks))
                    throw TypeError(".game.BattleRankPushNotify.ranks: array expected");
                message.ranks = [];
                for (var i = 0; i < object.ranks.length; ++i) {
                    if (typeof object.ranks[i] !== "object")
                        throw TypeError(".game.BattleRankPushNotify.ranks: object expected");
                    message.ranks[i] = $root.game.RankItem.fromObject(object.ranks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BattleRankPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BattleRankPushNotify
         * @static
         * @param {game.BattleRankPushNotify} message BattleRankPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BattleRankPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ranks = [];
            if (options.defaults)
                object.dayBest = null;
            if (message.dayBest != null && message.hasOwnProperty("dayBest"))
                object.dayBest = $root.game.RankItem.toObject(message.dayBest, options);
            if (message.ranks && message.ranks.length) {
                object.ranks = [];
                for (var j = 0; j < message.ranks.length; ++j)
                    object.ranks[j] = $root.game.RankItem.toObject(message.ranks[j], options);
            }
            return object;
        };

        /**
         * Converts this BattleRankPushNotify to JSON.
         * @function toJSON
         * @memberof game.BattleRankPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BattleRankPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BattleRankPushNotify;
    })();

    game.UserBattleMsgRequest = (function() {

        /**
         * Properties of a UserBattleMsgRequest.
         * @memberof game
         * @interface IUserBattleMsgRequest
         * @property {number|null} [length] UserBattleMsgRequest length
         * @property {number|null} [killCount] UserBattleMsgRequest killCount
         */

        /**
         * Constructs a new UserBattleMsgRequest.
         * @memberof game
         * @classdesc Represents a UserBattleMsgRequest.
         * @implements IUserBattleMsgRequest
         * @constructor
         * @param {game.IUserBattleMsgRequest=} [properties] Properties to set
         */
        function UserBattleMsgRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBattleMsgRequest length.
         * @member {number} length
         * @memberof game.UserBattleMsgRequest
         * @instance
         */
        UserBattleMsgRequest.prototype.length = 0;

        /**
         * UserBattleMsgRequest killCount.
         * @member {number} killCount
         * @memberof game.UserBattleMsgRequest
         * @instance
         */
        UserBattleMsgRequest.prototype.killCount = 0;

        /**
         * Creates a new UserBattleMsgRequest instance using the specified properties.
         * @function create
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {game.IUserBattleMsgRequest=} [properties] Properties to set
         * @returns {game.UserBattleMsgRequest} UserBattleMsgRequest instance
         */
        UserBattleMsgRequest.create = function create(properties) {
            return new UserBattleMsgRequest(properties);
        };

        /**
         * Encodes the specified UserBattleMsgRequest message. Does not implicitly {@link game.UserBattleMsgRequest.verify|verify} messages.
         * @function encode
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {game.IUserBattleMsgRequest} message UserBattleMsgRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBattleMsgRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.length);
            if (message.killCount != null && Object.hasOwnProperty.call(message, "killCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.killCount);
            return writer;
        };

        /**
         * Encodes the specified UserBattleMsgRequest message, length delimited. Does not implicitly {@link game.UserBattleMsgRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {game.IUserBattleMsgRequest} message UserBattleMsgRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBattleMsgRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBattleMsgRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserBattleMsgRequest} UserBattleMsgRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBattleMsgRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UserBattleMsgRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.length = reader.int32();
                    break;
                case 2:
                    message.killCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBattleMsgRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserBattleMsgRequest} UserBattleMsgRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBattleMsgRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBattleMsgRequest message.
         * @function verify
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBattleMsgRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            return null;
        };

        /**
         * Creates a UserBattleMsgRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserBattleMsgRequest} UserBattleMsgRequest
         */
        UserBattleMsgRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UserBattleMsgRequest)
                return object;
            var message = new $root.game.UserBattleMsgRequest();
            if (object.length != null)
                message.length = object.length | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserBattleMsgRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserBattleMsgRequest
         * @static
         * @param {game.UserBattleMsgRequest} message UserBattleMsgRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBattleMsgRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.length = 0;
                object.killCount = 0;
            }
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            return object;
        };

        /**
         * Converts this UserBattleMsgRequest to JSON.
         * @function toJSON
         * @memberof game.UserBattleMsgRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBattleMsgRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBattleMsgRequest;
    })();

    game.UserBattleMsgResponse = (function() {

        /**
         * Properties of a UserBattleMsgResponse.
         * @memberof game
         * @interface IUserBattleMsgResponse
         * @property {number|null} [length] UserBattleMsgResponse length
         * @property {number|null} [killCount] UserBattleMsgResponse killCount
         */

        /**
         * Constructs a new UserBattleMsgResponse.
         * @memberof game
         * @classdesc Represents a UserBattleMsgResponse.
         * @implements IUserBattleMsgResponse
         * @constructor
         * @param {game.IUserBattleMsgResponse=} [properties] Properties to set
         */
        function UserBattleMsgResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBattleMsgResponse length.
         * @member {number} length
         * @memberof game.UserBattleMsgResponse
         * @instance
         */
        UserBattleMsgResponse.prototype.length = 0;

        /**
         * UserBattleMsgResponse killCount.
         * @member {number} killCount
         * @memberof game.UserBattleMsgResponse
         * @instance
         */
        UserBattleMsgResponse.prototype.killCount = 0;

        /**
         * Creates a new UserBattleMsgResponse instance using the specified properties.
         * @function create
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {game.IUserBattleMsgResponse=} [properties] Properties to set
         * @returns {game.UserBattleMsgResponse} UserBattleMsgResponse instance
         */
        UserBattleMsgResponse.create = function create(properties) {
            return new UserBattleMsgResponse(properties);
        };

        /**
         * Encodes the specified UserBattleMsgResponse message. Does not implicitly {@link game.UserBattleMsgResponse.verify|verify} messages.
         * @function encode
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {game.IUserBattleMsgResponse} message UserBattleMsgResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBattleMsgResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.length);
            if (message.killCount != null && Object.hasOwnProperty.call(message, "killCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.killCount);
            return writer;
        };

        /**
         * Encodes the specified UserBattleMsgResponse message, length delimited. Does not implicitly {@link game.UserBattleMsgResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {game.IUserBattleMsgResponse} message UserBattleMsgResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBattleMsgResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBattleMsgResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserBattleMsgResponse} UserBattleMsgResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBattleMsgResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UserBattleMsgResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.length = reader.int32();
                    break;
                case 2:
                    message.killCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserBattleMsgResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserBattleMsgResponse} UserBattleMsgResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBattleMsgResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBattleMsgResponse message.
         * @function verify
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBattleMsgResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            return null;
        };

        /**
         * Creates a UserBattleMsgResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserBattleMsgResponse} UserBattleMsgResponse
         */
        UserBattleMsgResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UserBattleMsgResponse)
                return object;
            var message = new $root.game.UserBattleMsgResponse();
            if (object.length != null)
                message.length = object.length | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserBattleMsgResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserBattleMsgResponse
         * @static
         * @param {game.UserBattleMsgResponse} message UserBattleMsgResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBattleMsgResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.length = 0;
                object.killCount = 0;
            }
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            return object;
        };

        /**
         * Converts this UserBattleMsgResponse to JSON.
         * @function toJSON
         * @memberof game.UserBattleMsgResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBattleMsgResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserBattleMsgResponse;
    })();

    game.UserReviveRequest = (function() {

        /**
         * Properties of a UserReviveRequest.
         * @memberof game
         * @interface IUserReviveRequest
         */

        /**
         * Constructs a new UserReviveRequest.
         * @memberof game
         * @classdesc Represents a UserReviveRequest.
         * @implements IUserReviveRequest
         * @constructor
         * @param {game.IUserReviveRequest=} [properties] Properties to set
         */
        function UserReviveRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserReviveRequest instance using the specified properties.
         * @function create
         * @memberof game.UserReviveRequest
         * @static
         * @param {game.IUserReviveRequest=} [properties] Properties to set
         * @returns {game.UserReviveRequest} UserReviveRequest instance
         */
        UserReviveRequest.create = function create(properties) {
            return new UserReviveRequest(properties);
        };

        /**
         * Encodes the specified UserReviveRequest message. Does not implicitly {@link game.UserReviveRequest.verify|verify} messages.
         * @function encode
         * @memberof game.UserReviveRequest
         * @static
         * @param {game.IUserReviveRequest} message UserReviveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReviveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReviveRequest message, length delimited. Does not implicitly {@link game.UserReviveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserReviveRequest
         * @static
         * @param {game.IUserReviveRequest} message UserReviveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReviveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReviveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserReviveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserReviveRequest} UserReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReviveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UserReviveRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReviveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserReviveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserReviveRequest} UserReviveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReviveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReviveRequest message.
         * @function verify
         * @memberof game.UserReviveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReviveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserReviveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserReviveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserReviveRequest} UserReviveRequest
         */
        UserReviveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UserReviveRequest)
                return object;
            return new $root.game.UserReviveRequest();
        };

        /**
         * Creates a plain object from a UserReviveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserReviveRequest
         * @static
         * @param {game.UserReviveRequest} message UserReviveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReviveRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReviveRequest to JSON.
         * @function toJSON
         * @memberof game.UserReviveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReviveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReviveRequest;
    })();

    game.UserReviveResponse = (function() {

        /**
         * Properties of a UserReviveResponse.
         * @memberof game
         * @interface IUserReviveResponse
         * @property {number|null} [result] UserReviveResponse result
         * @property {number|null} [coin] UserReviveResponse coin
         */

        /**
         * Constructs a new UserReviveResponse.
         * @memberof game
         * @classdesc Represents a UserReviveResponse.
         * @implements IUserReviveResponse
         * @constructor
         * @param {game.IUserReviveResponse=} [properties] Properties to set
         */
        function UserReviveResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReviveResponse result.
         * @member {number} result
         * @memberof game.UserReviveResponse
         * @instance
         */
        UserReviveResponse.prototype.result = 0;

        /**
         * UserReviveResponse coin.
         * @member {number} coin
         * @memberof game.UserReviveResponse
         * @instance
         */
        UserReviveResponse.prototype.coin = 0;

        /**
         * Creates a new UserReviveResponse instance using the specified properties.
         * @function create
         * @memberof game.UserReviveResponse
         * @static
         * @param {game.IUserReviveResponse=} [properties] Properties to set
         * @returns {game.UserReviveResponse} UserReviveResponse instance
         */
        UserReviveResponse.create = function create(properties) {
            return new UserReviveResponse(properties);
        };

        /**
         * Encodes the specified UserReviveResponse message. Does not implicitly {@link game.UserReviveResponse.verify|verify} messages.
         * @function encode
         * @memberof game.UserReviveResponse
         * @static
         * @param {game.IUserReviveResponse} message UserReviveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReviveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            return writer;
        };

        /**
         * Encodes the specified UserReviveResponse message, length delimited. Does not implicitly {@link game.UserReviveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.UserReviveResponse
         * @static
         * @param {game.IUserReviveResponse} message UserReviveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReviveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReviveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.UserReviveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.UserReviveResponse} UserReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReviveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.UserReviveResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReviveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.UserReviveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.UserReviveResponse} UserReviveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReviveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReviveResponse message.
         * @function verify
         * @memberof game.UserReviveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReviveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            return null;
        };

        /**
         * Creates a UserReviveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.UserReviveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.UserReviveResponse} UserReviveResponse
         */
        UserReviveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.UserReviveResponse)
                return object;
            var message = new $root.game.UserReviveResponse();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReviveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.UserReviveResponse
         * @static
         * @param {game.UserReviveResponse} message UserReviveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReviveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.coin = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            return object;
        };

        /**
         * Converts this UserReviveResponse to JSON.
         * @function toJSON
         * @memberof game.UserReviveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReviveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReviveResponse;
    })();

    game.GameOverRequest = (function() {

        /**
         * Properties of a GameOverRequest.
         * @memberof game
         * @interface IGameOverRequest
         * @property {number|null} [length] GameOverRequest length
         * @property {number|null} [killCount] GameOverRequest killCount
         * @property {number|null} [lookAdCount] GameOverRequest lookAdCount
         */

        /**
         * Constructs a new GameOverRequest.
         * @memberof game
         * @classdesc Represents a GameOverRequest.
         * @implements IGameOverRequest
         * @constructor
         * @param {game.IGameOverRequest=} [properties] Properties to set
         */
        function GameOverRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameOverRequest length.
         * @member {number} length
         * @memberof game.GameOverRequest
         * @instance
         */
        GameOverRequest.prototype.length = 0;

        /**
         * GameOverRequest killCount.
         * @member {number} killCount
         * @memberof game.GameOverRequest
         * @instance
         */
        GameOverRequest.prototype.killCount = 0;

        /**
         * GameOverRequest lookAdCount.
         * @member {number} lookAdCount
         * @memberof game.GameOverRequest
         * @instance
         */
        GameOverRequest.prototype.lookAdCount = 0;

        /**
         * Creates a new GameOverRequest instance using the specified properties.
         * @function create
         * @memberof game.GameOverRequest
         * @static
         * @param {game.IGameOverRequest=} [properties] Properties to set
         * @returns {game.GameOverRequest} GameOverRequest instance
         */
        GameOverRequest.create = function create(properties) {
            return new GameOverRequest(properties);
        };

        /**
         * Encodes the specified GameOverRequest message. Does not implicitly {@link game.GameOverRequest.verify|verify} messages.
         * @function encode
         * @memberof game.GameOverRequest
         * @static
         * @param {game.IGameOverRequest} message GameOverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.length);
            if (message.killCount != null && Object.hasOwnProperty.call(message, "killCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.killCount);
            if (message.lookAdCount != null && Object.hasOwnProperty.call(message, "lookAdCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lookAdCount);
            return writer;
        };

        /**
         * Encodes the specified GameOverRequest message, length delimited. Does not implicitly {@link game.GameOverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameOverRequest
         * @static
         * @param {game.IGameOverRequest} message GameOverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameOverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameOverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameOverRequest} GameOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameOverRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.length = reader.int32();
                    break;
                case 2:
                    message.killCount = reader.int32();
                    break;
                case 3:
                    message.lookAdCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameOverRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameOverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameOverRequest} GameOverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameOverRequest message.
         * @function verify
         * @memberof game.GameOverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameOverRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            if (message.lookAdCount != null && message.hasOwnProperty("lookAdCount"))
                if (!$util.isInteger(message.lookAdCount))
                    return "lookAdCount: integer expected";
            return null;
        };

        /**
         * Creates a GameOverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameOverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameOverRequest} GameOverRequest
         */
        GameOverRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameOverRequest)
                return object;
            var message = new $root.game.GameOverRequest();
            if (object.length != null)
                message.length = object.length | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.lookAdCount != null)
                message.lookAdCount = object.lookAdCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameOverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameOverRequest
         * @static
         * @param {game.GameOverRequest} message GameOverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameOverRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.length = 0;
                object.killCount = 0;
                object.lookAdCount = 0;
            }
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.lookAdCount != null && message.hasOwnProperty("lookAdCount"))
                object.lookAdCount = message.lookAdCount;
            return object;
        };

        /**
         * Converts this GameOverRequest to JSON.
         * @function toJSON
         * @memberof game.GameOverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameOverRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverRequest;
    })();

    game.GameOverResponse = (function() {

        /**
         * Properties of a GameOverResponse.
         * @memberof game
         * @interface IGameOverResponse
         * @property {number|null} [length] GameOverResponse length
         * @property {number|null} [killCount] GameOverResponse killCount
         * @property {number|null} [surpass] GameOverResponse surpass
         * @property {number|null} [coin] GameOverResponse coin
         * @property {boolean|null} [isShare] GameOverResponse isShare
         * @property {string|null} [lookAdRewardsKey] GameOverResponse lookAdRewardsKey
         */

        /**
         * Constructs a new GameOverResponse.
         * @memberof game
         * @classdesc Represents a GameOverResponse.
         * @implements IGameOverResponse
         * @constructor
         * @param {game.IGameOverResponse=} [properties] Properties to set
         */
        function GameOverResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameOverResponse length.
         * @member {number} length
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.length = 0;

        /**
         * GameOverResponse killCount.
         * @member {number} killCount
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.killCount = 0;

        /**
         * GameOverResponse surpass.
         * @member {number} surpass
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.surpass = 0;

        /**
         * GameOverResponse coin.
         * @member {number} coin
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.coin = 0;

        /**
         * GameOverResponse isShare.
         * @member {boolean} isShare
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.isShare = false;

        /**
         * GameOverResponse lookAdRewardsKey.
         * @member {string} lookAdRewardsKey
         * @memberof game.GameOverResponse
         * @instance
         */
        GameOverResponse.prototype.lookAdRewardsKey = "";

        /**
         * Creates a new GameOverResponse instance using the specified properties.
         * @function create
         * @memberof game.GameOverResponse
         * @static
         * @param {game.IGameOverResponse=} [properties] Properties to set
         * @returns {game.GameOverResponse} GameOverResponse instance
         */
        GameOverResponse.create = function create(properties) {
            return new GameOverResponse(properties);
        };

        /**
         * Encodes the specified GameOverResponse message. Does not implicitly {@link game.GameOverResponse.verify|verify} messages.
         * @function encode
         * @memberof game.GameOverResponse
         * @static
         * @param {game.IGameOverResponse} message GameOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.length);
            if (message.killCount != null && Object.hasOwnProperty.call(message, "killCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.killCount);
            if (message.surpass != null && Object.hasOwnProperty.call(message, "surpass"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.surpass);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.coin);
            if (message.isShare != null && Object.hasOwnProperty.call(message, "isShare"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isShare);
            if (message.lookAdRewardsKey != null && Object.hasOwnProperty.call(message, "lookAdRewardsKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lookAdRewardsKey);
            return writer;
        };

        /**
         * Encodes the specified GameOverResponse message, length delimited. Does not implicitly {@link game.GameOverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameOverResponse
         * @static
         * @param {game.IGameOverResponse} message GameOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameOverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameOverResponse} GameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameOverResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.length = reader.int32();
                    break;
                case 2:
                    message.killCount = reader.int32();
                    break;
                case 3:
                    message.surpass = reader.int32();
                    break;
                case 4:
                    message.coin = reader.int32();
                    break;
                case 5:
                    message.isShare = reader.bool();
                    break;
                case 6:
                    message.lookAdRewardsKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameOverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameOverResponse} GameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameOverResponse message.
         * @function verify
         * @memberof game.GameOverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameOverResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                if (!$util.isInteger(message.killCount))
                    return "killCount: integer expected";
            if (message.surpass != null && message.hasOwnProperty("surpass"))
                if (!$util.isInteger(message.surpass))
                    return "surpass: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            if (message.isShare != null && message.hasOwnProperty("isShare"))
                if (typeof message.isShare !== "boolean")
                    return "isShare: boolean expected";
            if (message.lookAdRewardsKey != null && message.hasOwnProperty("lookAdRewardsKey"))
                if (!$util.isString(message.lookAdRewardsKey))
                    return "lookAdRewardsKey: string expected";
            return null;
        };

        /**
         * Creates a GameOverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameOverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameOverResponse} GameOverResponse
         */
        GameOverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameOverResponse)
                return object;
            var message = new $root.game.GameOverResponse();
            if (object.length != null)
                message.length = object.length | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.surpass != null)
                message.surpass = object.surpass | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            if (object.isShare != null)
                message.isShare = Boolean(object.isShare);
            if (object.lookAdRewardsKey != null)
                message.lookAdRewardsKey = String(object.lookAdRewardsKey);
            return message;
        };

        /**
         * Creates a plain object from a GameOverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameOverResponse
         * @static
         * @param {game.GameOverResponse} message GameOverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameOverResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.length = 0;
                object.killCount = 0;
                object.surpass = 0;
                object.coin = 0;
                object.isShare = false;
                object.lookAdRewardsKey = "";
            }
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.surpass != null && message.hasOwnProperty("surpass"))
                object.surpass = message.surpass;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.isShare != null && message.hasOwnProperty("isShare"))
                object.isShare = message.isShare;
            if (message.lookAdRewardsKey != null && message.hasOwnProperty("lookAdRewardsKey"))
                object.lookAdRewardsKey = message.lookAdRewardsKey;
            return object;
        };

        /**
         * Converts this GameOverResponse to JSON.
         * @function toJSON
         * @memberof game.GameOverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameOverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverResponse;
    })();

    game.Self = (function() {

        /**
         * Properties of a Self.
         * @memberof game
         * @interface ISelf
         * @property {number|null} [snakeLength] Self snakeLength
         * @property {string|null} [skinId] Self skinId
         * @property {Array.<game.IPoint>|null} [points] Self points
         * @property {number|null} [snakeSpeed] Self snakeSpeed
         */

        /**
         * Constructs a new Self.
         * @memberof game
         * @classdesc Represents a Self.
         * @implements ISelf
         * @constructor
         * @param {game.ISelf=} [properties] Properties to set
         */
        function Self(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Self snakeLength.
         * @member {number} snakeLength
         * @memberof game.Self
         * @instance
         */
        Self.prototype.snakeLength = 0;

        /**
         * Self skinId.
         * @member {string} skinId
         * @memberof game.Self
         * @instance
         */
        Self.prototype.skinId = "";

        /**
         * Self points.
         * @member {Array.<game.IPoint>} points
         * @memberof game.Self
         * @instance
         */
        Self.prototype.points = $util.emptyArray;

        /**
         * Self snakeSpeed.
         * @member {number} snakeSpeed
         * @memberof game.Self
         * @instance
         */
        Self.prototype.snakeSpeed = 0;

        /**
         * Creates a new Self instance using the specified properties.
         * @function create
         * @memberof game.Self
         * @static
         * @param {game.ISelf=} [properties] Properties to set
         * @returns {game.Self} Self instance
         */
        Self.create = function create(properties) {
            return new Self(properties);
        };

        /**
         * Encodes the specified Self message. Does not implicitly {@link game.Self.verify|verify} messages.
         * @function encode
         * @memberof game.Self
         * @static
         * @param {game.ISelf} message Self message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Self.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.snakeLength != null && Object.hasOwnProperty.call(message, "snakeLength"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.snakeLength);
            if (message.skinId != null && Object.hasOwnProperty.call(message, "skinId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.skinId);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    $root.game.Point.encode(message.points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.snakeSpeed != null && Object.hasOwnProperty.call(message, "snakeSpeed"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.snakeSpeed);
            return writer;
        };

        /**
         * Encodes the specified Self message, length delimited. Does not implicitly {@link game.Self.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Self
         * @static
         * @param {game.ISelf} message Self message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Self.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Self message from the specified reader or buffer.
         * @function decode
         * @memberof game.Self
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Self} Self
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Self.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Self();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.snakeLength = reader.int32();
                    break;
                case 2:
                    message.skinId = reader.string();
                    break;
                case 3:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.game.Point.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.snakeSpeed = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Self message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Self
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Self} Self
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Self.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Self message.
         * @function verify
         * @memberof game.Self
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Self.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                if (!$util.isInteger(message.snakeLength))
                    return "snakeLength: integer expected";
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                if (!$util.isString(message.skinId))
                    return "skinId: string expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i) {
                    var error = $root.game.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            if (message.snakeSpeed != null && message.hasOwnProperty("snakeSpeed"))
                if (!$util.isInteger(message.snakeSpeed))
                    return "snakeSpeed: integer expected";
            return null;
        };

        /**
         * Creates a Self message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Self
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Self} Self
         */
        Self.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Self)
                return object;
            var message = new $root.game.Self();
            if (object.snakeLength != null)
                message.snakeLength = object.snakeLength | 0;
            if (object.skinId != null)
                message.skinId = String(object.skinId);
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".game.Self.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".game.Self.points: object expected");
                    message.points[i] = $root.game.Point.fromObject(object.points[i]);
                }
            }
            if (object.snakeSpeed != null)
                message.snakeSpeed = object.snakeSpeed | 0;
            return message;
        };

        /**
         * Creates a plain object from a Self message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Self
         * @static
         * @param {game.Self} message Self
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Self.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults) {
                object.snakeLength = 0;
                object.skinId = "";
                object.snakeSpeed = 0;
            }
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                object.snakeLength = message.snakeLength;
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                object.skinId = message.skinId;
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.game.Point.toObject(message.points[j], options);
            }
            if (message.snakeSpeed != null && message.hasOwnProperty("snakeSpeed"))
                object.snakeSpeed = message.snakeSpeed;
            return object;
        };

        /**
         * Converts this Self to JSON.
         * @function toJSON
         * @memberof game.Self
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Self.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Self;
    })();

    game.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof game
         * @interface IPlayer
         * @property {number|Long|null} [uid] Player uid
         * @property {string|null} [name] Player name
         * @property {string|null} [skinId] Player skinId
         * @property {number|null} [snakeLength] Player snakeLength
         * @property {Array.<game.IPoint>|null} [points] Player points
         */

        /**
         * Constructs a new Player.
         * @memberof game
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {game.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player uid.
         * @member {number|Long} uid
         * @memberof game.Player
         * @instance
         */
        Player.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player name.
         * @member {string} name
         * @memberof game.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player skinId.
         * @member {string} skinId
         * @memberof game.Player
         * @instance
         */
        Player.prototype.skinId = "";

        /**
         * Player snakeLength.
         * @member {number} snakeLength
         * @memberof game.Player
         * @instance
         */
        Player.prototype.snakeLength = 0;

        /**
         * Player points.
         * @member {Array.<game.IPoint>} points
         * @memberof game.Player
         * @instance
         */
        Player.prototype.points = $util.emptyArray;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof game.Player
         * @static
         * @param {game.IPlayer=} [properties] Properties to set
         * @returns {game.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encode
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.skinId != null && Object.hasOwnProperty.call(message, "skinId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.skinId);
            if (message.snakeLength != null && Object.hasOwnProperty.call(message, "snakeLength"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.snakeLength);
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    $root.game.Point.encode(message.points[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link game.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Player
         * @static
         * @param {game.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.sint64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.skinId = reader.string();
                    break;
                case 4:
                    message.snakeLength = reader.int32();
                    break;
                case 5:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.game.Point.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                if (!$util.isString(message.skinId))
                    return "skinId: string expected";
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                if (!$util.isInteger(message.snakeLength))
                    return "snakeLength: integer expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i) {
                    var error = $root.game.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Player)
                return object;
            var message = new $root.game.Player();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.skinId != null)
                message.skinId = String(object.skinId);
            if (object.snakeLength != null)
                message.snakeLength = object.snakeLength | 0;
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".game.Player.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".game.Player.points: object expected");
                    message.points[i] = $root.game.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Player
         * @static
         * @param {game.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.name = "";
                object.skinId = "";
                object.snakeLength = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                object.skinId = message.skinId;
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                object.snakeLength = message.snakeLength;
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.game.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof game.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    game.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof game
         * @interface IPoint
         * @property {number|null} [px] Point px
         * @property {number|null} [py] Point py
         */

        /**
         * Constructs a new Point.
         * @memberof game
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {game.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point px.
         * @member {number} px
         * @memberof game.Point
         * @instance
         */
        Point.prototype.px = 0;

        /**
         * Point py.
         * @member {number} py
         * @memberof game.Point
         * @instance
         */
        Point.prototype.py = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof game.Point
         * @static
         * @param {game.IPoint=} [properties] Properties to set
         * @returns {game.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link game.Point.verify|verify} messages.
         * @function encode
         * @memberof game.Point
         * @static
         * @param {game.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.px != null && Object.hasOwnProperty.call(message, "px"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.px);
            if (message.py != null && Object.hasOwnProperty.call(message, "py"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.py);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link game.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Point
         * @static
         * @param {game.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof game.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Point();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.px = reader.float();
                    break;
                case 2:
                    message.py = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof game.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.px != null && message.hasOwnProperty("px"))
                if (typeof message.px !== "number")
                    return "px: number expected";
            if (message.py != null && message.hasOwnProperty("py"))
                if (typeof message.py !== "number")
                    return "py: number expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Point)
                return object;
            var message = new $root.game.Point();
            if (object.px != null)
                message.px = Number(object.px);
            if (object.py != null)
                message.py = Number(object.py);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Point
         * @static
         * @param {game.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.px = 0;
                object.py = 0;
            }
            if (message.px != null && message.hasOwnProperty("px"))
                object.px = options.json && !isFinite(message.px) ? String(message.px) : message.px;
            if (message.py != null && message.hasOwnProperty("py"))
                object.py = options.json && !isFinite(message.py) ? String(message.py) : message.py;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof game.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    game.Energy = (function() {

        /**
         * Properties of an Energy.
         * @memberof game
         * @interface IEnergy
         * @property {number|Long|null} [instanceId] Energy instanceId
         * @property {game.IPoint|null} [point] Energy point
         * @property {number|null} [value] Energy value
         */

        /**
         * Constructs a new Energy.
         * @memberof game
         * @classdesc Represents an Energy.
         * @implements IEnergy
         * @constructor
         * @param {game.IEnergy=} [properties] Properties to set
         */
        function Energy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Energy instanceId.
         * @member {number|Long} instanceId
         * @memberof game.Energy
         * @instance
         */
        Energy.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Energy point.
         * @member {game.IPoint|null|undefined} point
         * @memberof game.Energy
         * @instance
         */
        Energy.prototype.point = null;

        /**
         * Energy value.
         * @member {number} value
         * @memberof game.Energy
         * @instance
         */
        Energy.prototype.value = 0;

        /**
         * Creates a new Energy instance using the specified properties.
         * @function create
         * @memberof game.Energy
         * @static
         * @param {game.IEnergy=} [properties] Properties to set
         * @returns {game.Energy} Energy instance
         */
        Energy.create = function create(properties) {
            return new Energy(properties);
        };

        /**
         * Encodes the specified Energy message. Does not implicitly {@link game.Energy.verify|verify} messages.
         * @function encode
         * @memberof game.Energy
         * @static
         * @param {game.IEnergy} message Energy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Energy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.instanceId);
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                $root.game.Point.encode(message.point, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified Energy message, length delimited. Does not implicitly {@link game.Energy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Energy
         * @static
         * @param {game.IEnergy} message Energy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Energy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Energy message from the specified reader or buffer.
         * @function decode
         * @memberof game.Energy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Energy} Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Energy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Energy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.sint64();
                    break;
                case 2:
                    message.point = $root.game.Point.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Energy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.Energy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Energy} Energy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Energy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Energy message.
         * @function verify
         * @memberof game.Energy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Energy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.point != null && message.hasOwnProperty("point")) {
                var error = $root.game.Point.verify(message.point);
                if (error)
                    return "point." + error;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates an Energy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.Energy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.Energy} Energy
         */
        Energy.fromObject = function fromObject(object) {
            if (object instanceof $root.game.Energy)
                return object;
            var message = new $root.game.Energy();
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.point != null) {
                if (typeof object.point !== "object")
                    throw TypeError(".game.Energy.point: object expected");
                message.point = $root.game.Point.fromObject(object.point);
            }
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from an Energy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.Energy
         * @static
         * @param {game.Energy} message Energy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Energy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.point = null;
                object.value = 0;
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = $root.game.Point.toObject(message.point, options);
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Energy to JSON.
         * @function toJSON
         * @memberof game.Energy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Energy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Energy;
    })();

    game.RankItem = (function() {

        /**
         * Properties of a RankItem.
         * @memberof game
         * @interface IRankItem
         * @property {number|Long|null} [uid] RankItem uid
         * @property {string|null} [name] RankItem name
         * @property {number|null} [snakeLength] RankItem snakeLength
         * @property {number|null} [weekSnakeLength] RankItem weekSnakeLength
         */

        /**
         * Constructs a new RankItem.
         * @memberof game
         * @classdesc Represents a RankItem.
         * @implements IRankItem
         * @constructor
         * @param {game.IRankItem=} [properties] Properties to set
         */
        function RankItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankItem uid.
         * @member {number|Long} uid
         * @memberof game.RankItem
         * @instance
         */
        RankItem.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankItem name.
         * @member {string} name
         * @memberof game.RankItem
         * @instance
         */
        RankItem.prototype.name = "";

        /**
         * RankItem snakeLength.
         * @member {number} snakeLength
         * @memberof game.RankItem
         * @instance
         */
        RankItem.prototype.snakeLength = 0;

        /**
         * RankItem weekSnakeLength.
         * @member {number} weekSnakeLength
         * @memberof game.RankItem
         * @instance
         */
        RankItem.prototype.weekSnakeLength = 0;

        /**
         * Creates a new RankItem instance using the specified properties.
         * @function create
         * @memberof game.RankItem
         * @static
         * @param {game.IRankItem=} [properties] Properties to set
         * @returns {game.RankItem} RankItem instance
         */
        RankItem.create = function create(properties) {
            return new RankItem(properties);
        };

        /**
         * Encodes the specified RankItem message. Does not implicitly {@link game.RankItem.verify|verify} messages.
         * @function encode
         * @memberof game.RankItem
         * @static
         * @param {game.IRankItem} message RankItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.snakeLength != null && Object.hasOwnProperty.call(message, "snakeLength"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.snakeLength);
            if (message.weekSnakeLength != null && Object.hasOwnProperty.call(message, "weekSnakeLength"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.weekSnakeLength);
            return writer;
        };

        /**
         * Encodes the specified RankItem message, length delimited. Does not implicitly {@link game.RankItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RankItem
         * @static
         * @param {game.IRankItem} message RankItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankItem message from the specified reader or buffer.
         * @function decode
         * @memberof game.RankItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RankItem} RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RankItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.snakeLength = reader.int32();
                    break;
                case 4:
                    message.weekSnakeLength = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RankItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RankItem} RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankItem message.
         * @function verify
         * @memberof game.RankItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                if (!$util.isInteger(message.snakeLength))
                    return "snakeLength: integer expected";
            if (message.weekSnakeLength != null && message.hasOwnProperty("weekSnakeLength"))
                if (!$util.isInteger(message.weekSnakeLength))
                    return "weekSnakeLength: integer expected";
            return null;
        };

        /**
         * Creates a RankItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.RankItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.RankItem} RankItem
         */
        RankItem.fromObject = function fromObject(object) {
            if (object instanceof $root.game.RankItem)
                return object;
            var message = new $root.game.RankItem();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.snakeLength != null)
                message.snakeLength = object.snakeLength | 0;
            if (object.weekSnakeLength != null)
                message.weekSnakeLength = object.weekSnakeLength | 0;
            return message;
        };

        /**
         * Creates a plain object from a RankItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.RankItem
         * @static
         * @param {game.RankItem} message RankItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.name = "";
                object.snakeLength = 0;
                object.weekSnakeLength = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.snakeLength != null && message.hasOwnProperty("snakeLength"))
                object.snakeLength = message.snakeLength;
            if (message.weekSnakeLength != null && message.hasOwnProperty("weekSnakeLength"))
                object.weekSnakeLength = message.weekSnakeLength;
            return object;
        };

        /**
         * Converts this RankItem to JSON.
         * @function toJSON
         * @memberof game.RankItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankItem;
    })();

    return game;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.GeneralStreamMessage = (function() {

        /**
         * Properties of a GeneralStreamMessage.
         * @memberof common
         * @interface IGeneralStreamMessage
         * @property {string|null} [command] GeneralStreamMessage command
         * @property {number|Long|null} [seqId] GeneralStreamMessage seqId
         * @property {Uint8Array|null} [msgData] GeneralStreamMessage msgData
         */

        /**
         * Constructs a new GeneralStreamMessage.
         * @memberof common
         * @classdesc Represents a GeneralStreamMessage.
         * @implements IGeneralStreamMessage
         * @constructor
         * @param {common.IGeneralStreamMessage=} [properties] Properties to set
         */
        function GeneralStreamMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeneralStreamMessage command.
         * @member {string} command
         * @memberof common.GeneralStreamMessage
         * @instance
         */
        GeneralStreamMessage.prototype.command = "";

        /**
         * GeneralStreamMessage seqId.
         * @member {number|Long} seqId
         * @memberof common.GeneralStreamMessage
         * @instance
         */
        GeneralStreamMessage.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GeneralStreamMessage msgData.
         * @member {Uint8Array} msgData
         * @memberof common.GeneralStreamMessage
         * @instance
         */
        GeneralStreamMessage.prototype.msgData = $util.newBuffer([]);

        /**
         * Creates a new GeneralStreamMessage instance using the specified properties.
         * @function create
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {common.IGeneralStreamMessage=} [properties] Properties to set
         * @returns {common.GeneralStreamMessage} GeneralStreamMessage instance
         */
        GeneralStreamMessage.create = function create(properties) {
            return new GeneralStreamMessage(properties);
        };

        /**
         * Encodes the specified GeneralStreamMessage message. Does not implicitly {@link common.GeneralStreamMessage.verify|verify} messages.
         * @function encode
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {common.IGeneralStreamMessage} message GeneralStreamMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneralStreamMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seqId);
            if (message.msgData != null && Object.hasOwnProperty.call(message, "msgData"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.msgData);
            return writer;
        };

        /**
         * Encodes the specified GeneralStreamMessage message, length delimited. Does not implicitly {@link common.GeneralStreamMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {common.IGeneralStreamMessage} message GeneralStreamMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeneralStreamMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GeneralStreamMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.GeneralStreamMessage} GeneralStreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneralStreamMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.GeneralStreamMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                case 2:
                    message.seqId = reader.int64();
                    break;
                case 3:
                    message.msgData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GeneralStreamMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.GeneralStreamMessage} GeneralStreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeneralStreamMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GeneralStreamMessage message.
         * @function verify
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GeneralStreamMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                    return "seqId: integer|Long expected";
            if (message.msgData != null && message.hasOwnProperty("msgData"))
                if (!(message.msgData && typeof message.msgData.length === "number" || $util.isString(message.msgData)))
                    return "msgData: buffer expected";
            return null;
        };

        /**
         * Creates a GeneralStreamMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.GeneralStreamMessage} GeneralStreamMessage
         */
        GeneralStreamMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.GeneralStreamMessage)
                return object;
            var message = new $root.common.GeneralStreamMessage();
            if (object.command != null)
                message.command = String(object.command);
            if (object.seqId != null)
                if ($util.Long)
                    (message.seqId = $util.Long.fromValue(object.seqId)).unsigned = false;
                else if (typeof object.seqId === "string")
                    message.seqId = parseInt(object.seqId, 10);
                else if (typeof object.seqId === "number")
                    message.seqId = object.seqId;
                else if (typeof object.seqId === "object")
                    message.seqId = new $util.LongBits(object.seqId.low >>> 0, object.seqId.high >>> 0).toNumber();
            if (object.msgData != null)
                if (typeof object.msgData === "string")
                    $util.base64.decode(object.msgData, message.msgData = $util.newBuffer($util.base64.length(object.msgData)), 0);
                else if (object.msgData.length)
                    message.msgData = object.msgData;
            return message;
        };

        /**
         * Creates a plain object from a GeneralStreamMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.GeneralStreamMessage
         * @static
         * @param {common.GeneralStreamMessage} message GeneralStreamMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeneralStreamMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seqId = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.msgData = "";
                else {
                    object.msgData = [];
                    if (options.bytes !== Array)
                        object.msgData = $util.newBuffer(object.msgData);
                }
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.seqId != null && message.hasOwnProperty("seqId"))
                if (typeof message.seqId === "number")
                    object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
                else
                    object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
            if (message.msgData != null && message.hasOwnProperty("msgData"))
                object.msgData = options.bytes === String ? $util.base64.encode(message.msgData, 0, message.msgData.length) : options.bytes === Array ? Array.prototype.slice.call(message.msgData) : message.msgData;
            return object;
        };

        /**
         * Converts this GeneralStreamMessage to JSON.
         * @function toJSON
         * @memberof common.GeneralStreamMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeneralStreamMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeneralStreamMessage;
    })();

    common.ErrorPushNotify = (function() {

        /**
         * Properties of an ErrorPushNotify.
         * @memberof common
         * @interface IErrorPushNotify
         * @property {common.ErrorCode|null} [errorCode] ErrorPushNotify errorCode
         */

        /**
         * Constructs a new ErrorPushNotify.
         * @memberof common
         * @classdesc Represents an ErrorPushNotify.
         * @implements IErrorPushNotify
         * @constructor
         * @param {common.IErrorPushNotify=} [properties] Properties to set
         */
        function ErrorPushNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorPushNotify errorCode.
         * @member {common.ErrorCode} errorCode
         * @memberof common.ErrorPushNotify
         * @instance
         */
        ErrorPushNotify.prototype.errorCode = 0;

        /**
         * Creates a new ErrorPushNotify instance using the specified properties.
         * @function create
         * @memberof common.ErrorPushNotify
         * @static
         * @param {common.IErrorPushNotify=} [properties] Properties to set
         * @returns {common.ErrorPushNotify} ErrorPushNotify instance
         */
        ErrorPushNotify.create = function create(properties) {
            return new ErrorPushNotify(properties);
        };

        /**
         * Encodes the specified ErrorPushNotify message. Does not implicitly {@link common.ErrorPushNotify.verify|verify} messages.
         * @function encode
         * @memberof common.ErrorPushNotify
         * @static
         * @param {common.IErrorPushNotify} message ErrorPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorPushNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified ErrorPushNotify message, length delimited. Does not implicitly {@link common.ErrorPushNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ErrorPushNotify
         * @static
         * @param {common.IErrorPushNotify} message ErrorPushNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorPushNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorPushNotify message from the specified reader or buffer.
         * @function decode
         * @memberof common.ErrorPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ErrorPushNotify} ErrorPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorPushNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ErrorPushNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorPushNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ErrorPushNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ErrorPushNotify} ErrorPushNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorPushNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorPushNotify message.
         * @function verify
         * @memberof common.ErrorPushNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorPushNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                switch (message.errorCode) {
                default:
                    return "errorCode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates an ErrorPushNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ErrorPushNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ErrorPushNotify} ErrorPushNotify
         */
        ErrorPushNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ErrorPushNotify)
                return object;
            var message = new $root.common.ErrorPushNotify();
            switch (object.errorCode) {
            case "INTERVAL":
            case 0:
                message.errorCode = 0;
                break;
            case "RE_LOGIN":
            case 1:
                message.errorCode = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an ErrorPushNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ErrorPushNotify
         * @static
         * @param {common.ErrorPushNotify} message ErrorPushNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorPushNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errorCode = options.enums === String ? "INTERVAL" : 0;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.common.ErrorCode[message.errorCode] : message.errorCode;
            return object;
        };

        /**
         * Converts this ErrorPushNotify to JSON.
         * @function toJSON
         * @memberof common.ErrorPushNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorPushNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorPushNotify;
    })();

    /**
     * ErrorCode enum.
     * @name common.ErrorCode
     * @enum {number}
     * @property {number} INTERVAL=0 INTERVAL value
     * @property {number} RE_LOGIN=1 RE_LOGIN value
     */
    common.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INTERVAL"] = 0;
        values[valuesById[1] = "RE_LOGIN"] = 1;
        return values;
    })();

    return common;
})();

module.exports = $root;
