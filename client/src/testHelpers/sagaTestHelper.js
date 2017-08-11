export function verifySaga(actualSagaIterator, expectedSagaIterator) {
    const actualActionType = actualSagaIterator.next().value
    const expectedActionType = expectedSagaIterator.next().value
    expect(actualActionType).toEqual(expectedActionType)

    const actualDelegatedSaga = actualSagaIterator.next().value
    const expectedDelegatedSaga = expectedSagaIterator.next().value
    expect(actualDelegatedSaga).toEqual(expectedDelegatedSaga)
}