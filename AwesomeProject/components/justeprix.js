import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Text, } from 'react-native';


	const styles = StyleSheet.create(
	{
  		TextInput:
		{
			fontWeight: 'bold',
    		fontSize: 15,
    		alignItems: 'center',
    		backgroundColor: 'white',
  		},

		Text:
		{
  			fontWeight: 'bold',
  			fontSize: 15,
    		color: "#ffd21c",
    		backgroundColor: 'black',
    		textAlign: 'center',
  		}
	});


	export default class Search extends Component
	{
		constructor(...props)
		{
			super(...props);
			this.nb_final = this.nb_aleatoire(1, 100);
			this.state =
				{
					cpt:0,
					saisie:"",
					msg:false,
					msg2:false,

				}
		}


		game = () =>
		{
			console.log(this.state.saisie);
			console.log(this.nb_final);
			var nb = this.nb_final;
			const {cpt, saisie} = this.state;
			var msg;
			var msg2;


			if( saisie > nb )
			{
				msg = "trop haut...";
				this.setState(
					{
						cpt:cpt+1
					});
			}
			else if( saisie < nb)
			{
				msg= "trop bas...";
				this.setState(
					{
						cpt:cpt+1
					});
			}
			else
			{
				msg = "bravo ";
				msg2 = "vous avez gagné en" + cpt + "coup(s)";
			}
			this.setState(
		{
					msg:msg,
					msg2:msg2
				});


		}

		restart = () =>
		{
			this.setState(
				{
					cpt:0,
					saisie:"",
					msg:false,
					msg2:false,

				});
			this.nb_final = this.nb_aleatoire(1, 100);
		}

		nb_aleatoire = (min, max) =>
		{
		var nb = min + (max-min+1)*Math.random();
		return Math.floor(nb);
		}

		render()
		{
			return (
				<View>
					<Text style={styles.Text}> Devinez un nombre entre 1 et 100 ! </Text>
					<TextInput style={styles.TextInput} ref= {(el) => { this.saisie = el; }}
						   onChangeText={(saisie) => this.setState({saisie})}
						   value={this.state.saisie} placeholderTextColor='white' placeholder="Entrez votre reponse ici" />
					<Button title="Valider" onPress={this.game}/>
					<Button title="Reset" onPress={this.restart}/>
					<Text>Tentative : {this.state.cpt}</Text>
					<Text>{this.state.msg}</Text>
					<Text>{this.state.msg2}</Text>
				</View>
					)
		}
	}



