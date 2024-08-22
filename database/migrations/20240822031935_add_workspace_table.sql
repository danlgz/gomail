-- +goose Up
-- +goose StatementBegin
CREATE TABLE workspaces (
    id TEXT PRIMARY KEY NOT NULL DEFAULT ('wrk_' || substr(hex(randomblob(6)), 1, 12)),
    name TEXT NOT NULL,
    base_color TEXT NOT NULL
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE workspaces;
-- +goose StatementEnd
