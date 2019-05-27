import * as allServices from '../services/all'

export default {
    namespace: 'all',
    state: {
        list: [],
        total: null
    },
    reducers: {
        save(state, { payload: { data: list, total } }) {
            
            return { ...state, list, total }

        
        }
    },
    effects: {
        *fetch({ payload: { page } }, { call, put }) {
            const { data, headers } = yield call(allServices.fetch, { page })
            console.log(data,'2132132')
            yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/home/articles/all') {
                    dispatch({
                        type: 'fetch',
                        payload: query
                    })
                }
            })
        }
    }

}
