// const Loader = () => <div>Loading...</div>;
// class LoadingComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//     };
//   }

//   hideLoader = () => {
//     this.setState({ loading: false });
//   }

//   showLoader = () => {
//     this.setState({ loading: true });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.fetchInfo} />
//         {(this.state.loading) ? <Loader /> : null}
//       </div>
//     );
//   }
// }
// export default LoadingComponent ;