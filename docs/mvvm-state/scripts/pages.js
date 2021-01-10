var pages = [{"name":"sealed class ResourceState<out T, out E>","description":"dev.icerock.moko.mvvm.ResourceState","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/index.html","searchKeys":["ResourceState","sealed class ResourceState<out T, out E>"]},{"name":"class Empty<out T, out E> : ResourceState<T, E> ","description":"dev.icerock.moko.mvvm.ResourceState.Empty","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-empty/index.html","searchKeys":["Empty","class Empty<out T, out E> : ResourceState<T, E> "]},{"name":"fun Empty()","description":"dev.icerock.moko.mvvm.ResourceState.Empty.Empty","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-empty/-empty.html","searchKeys":["Empty","fun Empty()"]},{"name":"data class Failed<out T, out E>(error: E) : ResourceState<T, E> ","description":"dev.icerock.moko.mvvm.ResourceState.Failed","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-failed/index.html","searchKeys":["Failed","data class Failed<out T, out E>(error: E) : ResourceState<T, E> "]},{"name":"fun <out E> Failed(error: E)","description":"dev.icerock.moko.mvvm.ResourceState.Failed.Failed","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-failed/-failed.html","searchKeys":["Failed","fun <out E> Failed(error: E)"]},{"name":"operator fun component1(): E","description":"dev.icerock.moko.mvvm.ResourceState.Failed.component1","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-failed/component1.html","searchKeys":["component1","operator fun component1(): E"]},{"name":"operator fun component1(): T","description":"dev.icerock.moko.mvvm.ResourceState.Success.component1","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-success/component1.html","searchKeys":["component1","operator fun component1(): T"]},{"name":"fun copy(error: E): ResourceState.Failed<T, E>","description":"dev.icerock.moko.mvvm.ResourceState.Failed.copy","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-failed/copy.html","searchKeys":["copy","fun copy(error: E): ResourceState.Failed<T, E>"]},{"name":"fun copy(data: T): ResourceState.Success<T, E>","description":"dev.icerock.moko.mvvm.ResourceState.Success.copy","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-success/copy.html","searchKeys":["copy","fun copy(data: T): ResourceState.Success<T, E>"]},{"name":"val error: E","description":"dev.icerock.moko.mvvm.ResourceState.Failed.error","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-failed/error.html","searchKeys":["error","val error: E"]},{"name":"class Loading<out T, out E> : ResourceState<T, E> ","description":"dev.icerock.moko.mvvm.ResourceState.Loading","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-loading/index.html","searchKeys":["Loading","class Loading<out T, out E> : ResourceState<T, E> "]},{"name":"fun Loading()","description":"dev.icerock.moko.mvvm.ResourceState.Loading.Loading","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-loading/-loading.html","searchKeys":["Loading","fun Loading()"]},{"name":"data class Success<out T, out E>(data: T) : ResourceState<T, E> ","description":"dev.icerock.moko.mvvm.ResourceState.Success","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-success/index.html","searchKeys":["Success","data class Success<out T, out E>(data: T) : ResourceState<T, E> "]},{"name":"fun <out T> Success(data: T)","description":"dev.icerock.moko.mvvm.ResourceState.Success.Success","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-success/-success.html","searchKeys":["Success","fun <out T> Success(data: T)"]},{"name":"val data: T","description":"dev.icerock.moko.mvvm.ResourceState.Success.data","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/-success/data.html","searchKeys":["data","val data: T"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.data(): LiveData<T?>","description":"dev.icerock.moko.mvvm.livedata.data","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/data.html","searchKeys":["data","fun <T, E> LiveData<ResourceState<T, E>>.data(): LiveData<T?>"]},{"name":"fun dataValue(): T?","description":"dev.icerock.moko.mvvm.ResourceState.dataValue","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/data-value.html","searchKeys":["dataValue","fun dataValue(): T?"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.dataValue(): T?","description":"dev.icerock.moko.mvvm.livedata.dataValue","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/data-value.html","searchKeys":["dataValue","fun <T, E> LiveData<ResourceState<T, E>>.dataValue(): T?"]},{"name":"fun errorValue(): E?","description":"dev.icerock.moko.mvvm.ResourceState.errorValue","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/error-value.html","searchKeys":["errorValue","fun errorValue(): E?"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.errorValue(): E?","description":"dev.icerock.moko.mvvm.livedata.errorValue","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/error-value.html","searchKeys":["errorValue","fun <T, E> LiveData<ResourceState<T, E>>.errorValue(): E?"]},{"name":"fun isEmpty(): Boolean","description":"dev.icerock.moko.mvvm.ResourceState.isEmpty","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/is-empty.html","searchKeys":["isEmpty","fun isEmpty(): Boolean"]},{"name":"fun isFailed(): Boolean","description":"dev.icerock.moko.mvvm.ResourceState.isFailed","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/is-failed.html","searchKeys":["isFailed","fun isFailed(): Boolean"]},{"name":"fun isLoading(): Boolean","description":"dev.icerock.moko.mvvm.ResourceState.isLoading","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/is-loading.html","searchKeys":["isLoading","fun isLoading(): Boolean"]},{"name":"fun isSuccess(): Boolean","description":"dev.icerock.moko.mvvm.ResourceState.isSuccess","location":"mvvm-state/dev.icerock.moko.mvvm/-resource-state/is-success.html","searchKeys":["isSuccess","fun isSuccess(): Boolean"]},{"name":"fun <T1, E, T2, OT> LiveData<ResourceState<T1, E>>.concatData(liveData: LiveData<ResourceState<T2, E>>, function: (T1, T2) -> OT): LiveData<ResourceState<OT, E>>","description":"dev.icerock.moko.mvvm.livedata.concatData","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/concat-data.html","searchKeys":["concatData","fun <T1, E, T2, OT> LiveData<ResourceState<T1, E>>.concatData(liveData: LiveData<ResourceState<T2, E>>, function: (T1, T2) -> OT): LiveData<ResourceState<OT, E>>"]},{"name":"fun <IT, E, OT> LiveData<ResourceState<IT, E>>.dataTransform(transform: LiveData<IT>.() -> LiveData<OT>): LiveData<ResourceState<OT, E>>","description":"dev.icerock.moko.mvvm.livedata.dataTransform","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/data-transform.html","searchKeys":["dataTransform","fun <IT, E, OT> LiveData<ResourceState<IT, E>>.dataTransform(transform: LiveData<IT>.() -> LiveData<OT>): LiveData<ResourceState<OT, E>>"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.emptyAsData(dataBuilder: () -> T): LiveData<ResourceState<T, E>>","description":"dev.icerock.moko.mvvm.livedata.emptyAsData","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/empty-as-data.html","searchKeys":["emptyAsData","fun <T, E> LiveData<ResourceState<T, E>>.emptyAsData(dataBuilder: () -> T): LiveData<ResourceState<T, E>>"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.emptyAsError(errorBuilder: () -> E): LiveData<ResourceState<T, E>>","description":"dev.icerock.moko.mvvm.livedata.emptyAsError","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/empty-as-error.html","searchKeys":["emptyAsError","fun <T, E> LiveData<ResourceState<T, E>>.emptyAsError(errorBuilder: () -> E): LiveData<ResourceState<T, E>>"]},{"name":"fun <T, E> LiveData<ResourceState<T, E>>.emptyIf(emptyPredicate: (T) -> Boolean): LiveData<ResourceState<T, E>>","description":"dev.icerock.moko.mvvm.livedata.emptyIf","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/empty-if.html","searchKeys":["emptyIf","fun <T, E> LiveData<ResourceState<T, E>>.emptyIf(emptyPredicate: (T) -> Boolean): LiveData<ResourceState<T, E>>"]},{"name":"fun <T, IE, OE> LiveData<ResourceState<T, IE>>.errorTransform(transform: LiveData<IE>.() -> LiveData<OE>): LiveData<ResourceState<T, OE>>","description":"dev.icerock.moko.mvvm.livedata.errorTransform","location":"mvvm-state/dev.icerock.moko.mvvm.livedata/error-transform.html","searchKeys":["errorTransform","fun <T, IE, OE> LiveData<ResourceState<T, IE>>.errorTransform(transform: LiveData<IE>.() -> LiveData<OE>): LiveData<ResourceState<T, OE>>"]},{"name":"inline fun <T, E> ResourceState<T, E>?.nullAsEmpty(): ResourceState<T, E>","description":"dev.icerock.moko.mvvm.nullAsEmpty","location":"mvvm-state/dev.icerock.moko.mvvm/null-as-empty.html","searchKeys":["nullAsEmpty","inline fun <T, E> ResourceState<T, E>?.nullAsEmpty(): ResourceState<T, E>"]},{"name":"inline fun <T, E> ResourceState<T, E>?.nullAsLoading(): ResourceState<T, E>","description":"dev.icerock.moko.mvvm.nullAsLoading","location":"mvvm-state/dev.icerock.moko.mvvm/null-as-loading.html","searchKeys":["nullAsLoading","inline fun <T, E> ResourceState<T, E>?.nullAsLoading(): ResourceState<T, E>"]}]
