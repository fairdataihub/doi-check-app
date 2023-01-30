"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (app) {
    app.log("Yay! The app was loaded!");
    // On adding app to the account
    app.on("installation.created", function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var owner, _i, _a, repo, repoName;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Installation created");
                    owner = context.payload.installation.account.login;
                    _i = 0, _a = context.payload.repositories;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    repo = _a[_i];
                    repoName = repo.name;
                    return [4 /*yield*/, checkForDOI(context, owner, repoName)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    // On adding adding a repository to the app
    app.on("installation_repositories.added", function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var owner, _i, _a, repo, repoName;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Repository added");
                    owner = context.payload.installation.account.login;
                    _i = 0, _a = context.payload.repositories_added;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    repo = _a[_i];
                    repoName = repo.name;
                    return [4 /*yield*/, checkForDOI(context, owner, repoName)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    // on creating a new repository
    app.on("repository.created", function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var owner, repoName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Repository created");
                    owner = context.payload.repository.owner.login;
                    repoName = context.payload.repository.name;
                    return [4 /*yield*/, checkForDOI(context, owner, repoName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // on commiting to the master branch
    app.on("push", function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var owner, repoName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Push event");
                    owner = context.payload.repository.owner.login;
                    repoName = context.payload.repository.name;
                    return [4 /*yield*/, checkForDOI(context, owner, repoName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
/**
 * Checks for a DOI in the README.md file of a repository
 * @param {import('probot').Context} context
 * @param {String} owner
 * @param {String} repoName
 * @returns
 */
var checkForDOI = function (context, owner, repoName) { return __awaiter(void 0, void 0, void 0, function () {
    var readme, readmeContent, doiRegex, doi, error_1, issue, repoIssue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(owner, repoName);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 6]);
                // Get the README
                console.log("Requesting README...");
                return [4 /*yield*/, context.octokit.rest.repos.getReadme({
                        owner: owner,
                        repo: repoName,
                    })];
            case 2:
                readme = _a.sent();
                console.log("README found");
                readmeContent = Buffer.from(readme.data.content, "base64").toString();
                // Check if a doi is present in the readme
                console.log("Checking for DOI...");
                doiRegex = /10.\d{4,9}\/[-._;()/:A-Z0-9]+/i;
                doi = doiRegex.exec(readmeContent);
                /**
                 * !TODO: Check if the doi is valid
                 * Potentially use the crossref api or resolve the DOI manually
                 */
                if (doi) {
                    console.log("DOI found");
                }
                else {
                    // throw an error to trigger the catch block
                    throw new Error("DOI not found");
                }
                return [3 /*break*/, 6];
            case 3:
                error_1 = _a.sent();
                console.log("Opening issue...");
                return [4 /*yield*/, context.octokit.rest.issues.listForRepo({
                        owner: owner,
                        repo: repoName,
                        state: "open",
                        creator: "doi-checker-app[bot]",
                    })];
            case 4:
                issue = _a.sent();
                // If the issue already exists, return
                if (issue.data.length > 0) {
                    console.log("Issue already exists");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, context.octokit.rest.issues.create({
                        owner: owner,
                        repo: repoName,
                        title: "Could not find a DOI in the README",
                        body: ISSUE_MESSAGE,
                    })];
            case 5:
                repoIssue = _a.sent();
                return [2 /*return*/, repoIssue];
            case 6: return [2 /*return*/];
        }
    });
}); };
var ISSUE_MESSAGE = "# DOI Checker \uD83D\uDD0D\n\n## Status \u2139\uFE0F\n\nWe went through the README in your repository and couldn't find any DOI references.\n\n## What you can do \uD83D\uDCA1\n\n### Add a DOI \uD83D\uDCDD\n\nIf you have a DOI for your software, please add it to your README. You can do this by adding a line like this to your README:\n\n    [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.123456.svg)](https://doi.org/10.5281/zenodo.123456)\n\nIf you don't have a DOI yet, you can get one from platforms like [Zenodo \uD83D\uDCE6](https://zenodo.org/), [Figshare \uD83D\uDCCA](https://figshare.com/) or [DataCite \uD83D\uDCDA](https://datacite.org/). \n\n### FAIRshare \uD83C\uDF1F\n\nTo help you get started, we've created an application that you can use to upload your software to Zenodo and/or Figshare and get a DOI for it. You can find the application at [fairdataihub.org/fairshare \uD83D\uDD0D](https://fairdataihub.org/fairshare).";
