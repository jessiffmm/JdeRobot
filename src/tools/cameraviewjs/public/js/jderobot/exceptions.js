// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `exceptions.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var jderobot = __M.module("jderobot");

    jderobot.JderobotException = Slice.defineUserException(
        function(what, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.what = what !== undefined ? what : "";
        },
        Ice.UserException,
        "jderobot::JderobotException",
        function(__os)
        {
            __os.writeString(this.what);
        },
        function(__is)
        {
            this.what = __is.readString();
        },
        false,
        false);

    jderobot.ConfigurationNotExistException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::ConfigurationNotExistException",
        undefined, undefined,
        false,
        false);

    jderobot.DataNotExistException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::DataNotExistException",
        undefined, undefined,
        false,
        false);

    jderobot.HardwareFailedException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::HardwareFailedException",
        undefined, undefined,
        false,
        false);

    jderobot.NoTopicException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::NoTopicException",
        undefined, undefined,
        false,
        false);

    jderobot.SubscriptionFailedException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::SubscriptionFailedException",
        undefined, undefined,
        false,
        false);

    jderobot.SubscriptionPushFailedException = Slice.defineUserException(
        function(what, _cause)
        {
            jderobot.JderobotException.call(this, what, _cause);
        },
        jderobot.JderobotException,
        "jderobot::SubscriptionPushFailedException",
        undefined, undefined,
        false,
        false);
    exports.jderobot = jderobot;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
