const dataGame = [{ id: 1, name: 'game1', date_game: '20180808', game_type: 'bridge', org_type: 'swiss', match_type: 'team' },
{ id: 2, name: 'game1', date_game: '20180808', game_type: 'bridge', org_type: 'swiss', match_type: 'team' }];

function gameList(method, args, kwargs) {
    // export function gameList(method, args, kwargs) {
    switch (method) {
        case 'read2':
            return read2(args, kwargs);
        case 'search_read2':
            return searchRead2(args, kwargs);
        default:
            break;
    }
}

function read2(args, kwargs) {
    const mock = kwargs.context.mock_react_api;
    switch (mock) {
        case 'QueryGame':
            // case 'game/querygame':
            return [dataGame[0]];
        default:
            break;
    }
}
function searchRead2(args, kwargs) {

    const mock = kwargs.context.mock_react_api;
    switch (mock) {
        case 'QueryGames':
            return dataGame;
        default:
            break;
    }
}

module.exports = gameList ;