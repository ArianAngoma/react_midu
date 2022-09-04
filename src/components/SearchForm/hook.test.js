import {act, renderHook} from "@testing-library/react-hooks";
import useForm from "./hook";

const setup = (params) => renderHook(() => useForm(params));

test('Should change keyword', () => {
    const {result} = setup()

    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
});

test('Should use initial values', () => {
    const {result} = setup({
        initialKeyword: 'matrix',
    })

    expect(result.current.keyword).toBe('matrix')
});

test('Should update correctly times when used twice', () => {
    const {result} = setup({
        initialKeyword: 'matrix',
    })

    act(() => {
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')
    })

    expect(result.current.keyword).toBe('ba')
});
